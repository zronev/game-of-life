import React, { FC, useContext, useEffect, useState } from 'react'
import type { Options } from '../../../core/options'
import { Grid, GridFromOptions } from '../../../core/grid'
import { GameContext } from '../contexts/game-context'

type Props = {
  options: Options
  children: (grid: Grid, options: Options) => JSX.Element
}

const GameFieldGrid: FC<Props> = ({ options, children }) => {
  const defaultGrid = new GridFromOptions(options.fieldSides)
  const [grid, setGrid] = useState<Grid>(defaultGrid)

  const { game } = useContext(GameContext)
  const emitter = game.getEmitter('field')

  useEffect(() => {
    emitter.addListener('GRID_CHANGED', setGrid)

    return () => emitter.removeListener('GRID_CHANGED', setGrid)
  }, [])

  return <>{children(grid, options)}</>
}

export default GameFieldGrid
