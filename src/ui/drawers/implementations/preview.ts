import { Layer } from '../types'
import { drawCell } from '../utility'
import { Grid } from '../../../core/grid'

export const drawPreview = (
  pattern: Grid,
  position: Point,
  layer: Layer
): void => {
  const { context, cellSize } = layer
  const { rows, columns, cells } = pattern

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const isCellAlive = cells[y][x]

      if (!isCellAlive) continue

      const cell = {
        x: (x + position.x) * cellSize,
        y: (y + position.y) * cellSize,
        side: cellSize,
      }

      drawCell(context, cell)
    }
  }
}
