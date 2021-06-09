import React, { FC, useContext } from 'react'
import { PatternContext } from './pattern-context'

import GridLayer from '../game-field/layers/GridLayer'
import ColonyLayer from '../game-field/layers/ColonyLayer'
import RelativeWrapper from '../../common/RelativeWrapper'

import { Options } from '../../../game'
import { CELL_COLOR, CELL_SIZE } from './constants'
import type { Pattern } from '../../../patterns'

type Props = {
  pattern: Pattern
}

const PatternsListItem: FC<Props> = ({ pattern }) => {
  const { name, grid } = pattern
  const [selectedPattern, setSelectedPattern] = useContext(PatternContext)

  const isActive = name === selectedPattern.name

  const handleClick = () => {
    if (!isActive) setSelectedPattern({ name, grid })
  }

  const options = new Options({
    fieldSides: {
      rows: grid.rows,
      columns: grid.columns,
    },
    canvasSize: {
      width: grid.columns * CELL_SIZE,
      height: grid.rows * CELL_SIZE,
    },
    cellSize: CELL_SIZE,
    color: CELL_COLOR,
  }).toMap()

  const gridOptions = {
    ...options,
    color: '#0984e3',
  }

  return (
    <div
      className={`pattern ${isActive ? 'pattern--active' : ''}`}
      onClick={handleClick}
    >
      <RelativeWrapper>
        <ColonyLayer
          options={options}
          onLayerReady={draw => draw(grid)}
          className="pattern__canvas"
        />
        <GridLayer options={gridOptions} className="pattern__canvas" />
      </RelativeWrapper>

      <p className="pattern__name">{name}</p>
    </div>
  )
}

export default PatternsListItem
