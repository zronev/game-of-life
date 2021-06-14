import type { Layer } from '../../layers'
import type { Grid } from '../../../../core/grid'
import { drawCell } from '../utility'

type DrawPreviewOptions = {
  pattern: Grid
  position: Point
  layer: Layer
}

export const drawPreview = ({
  pattern,
  position,
  layer,
}: DrawPreviewOptions): void => {
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
