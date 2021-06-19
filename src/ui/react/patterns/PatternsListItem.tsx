import React, { FC, useContext } from 'react'
import type { Pattern } from '../../../patterns'
import { PatternContext } from './pattern-context'

import GridLayer from '../layers/GridLayer'
import ColonyLayer from '../layers/ColonyLayer'
import RelativeWrapper from '../common/RelativeWrapper'

import { Options } from '../../../core/options'
import {
  CELL_COLOR,
  CELL_SIZE,
  GRID_COLOR,
} from '../../common/patterns/constant'

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

  const gridOptions = { ...options, color: GRID_COLOR }

  return (
    <div
      onClick={handleClick}
      className={`pattern ${isActive ? 'pattern--active' : ''}`}
    >
      <RelativeWrapper>
        <ColonyLayer
          grid={grid}
          options={options}
          className="pattern__canvas"
        />
        <GridLayer options={gridOptions} className="pattern__canvas" />
      </RelativeWrapper>

      <p className="pattern__name">{name}</p>
    </div>
  )
}

export default PatternsListItem
