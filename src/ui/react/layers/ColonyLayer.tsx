import React, { FC, useEffect } from 'react'
import Layer from './Layer'
import useLayer from './useLayer'
import { drawColony, clear } from '../../common/drawers'

import type { Grid } from '../../../core/grid'
import type { OptionsMap } from '../../../core/options'
import type { WithClass } from '../common/types'

type Props = {
  grid: Grid
  options: OptionsMap
} & WithClass

const ColonyLayer: FC<Props> = ({ grid, options, className = '' }) => {
  const { ref, layer } = useLayer(options)

  useEffect(() => {
    if (!layer) return

    const draw = (grid: Grid) => {
      clear(layer)
      drawColony(grid, layer)
    }

    draw(grid)
  }, [grid, layer, options.cellSize])

  return (
    <Layer
      ref={ref}
      size={options.canvasSize}
      className={`colony-canvas ${className}`}
    />
  )
}

export default ColonyLayer
