import { Layer } from '../types'
import { drawCell } from '../utility'
import { Grid } from '../../../core/grid'

export const drawColony = (grid: Grid, layer: Layer): void => {
  const { context, cellSize } = layer
  const { rows, columns, cells } = grid

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const isCellAlive = cells[y][x]

      if (!isCellAlive) continue

      const cell = {
        x: x * cellSize,
        y: y * cellSize,
        side: cellSize,
      }

      drawCell(context, cell)
    }
  }
}
