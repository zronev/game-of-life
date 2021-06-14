import type { Layer } from '../../layers'
import type { OptionsMap } from '../../../../core/options'

const drawLine = (
  context: CanvasRenderingContext2D,
  start: Point,
  end: Point,
  color: string
) => {
  context.beginPath()
  context.moveTo(start.x, start.y)
  context.lineTo(end.x, end.y)
  context.lineWidth = 0.25
  context.strokeStyle = color
  context.stroke()
}

export const drawGrid = (layer: Layer, options: OptionsMap): void => {
  const { context, cellSize } = layer
  const { fieldSides, color } = options
  const { rows, columns } = fieldSides

  for (let y = 1; y < rows; y++) {
    const start: Point = { x: 0, y: y * cellSize }
    const end: Point = { x: columns * cellSize, y: y * cellSize }
    drawLine(context, start, end, color)
  }

  for (let x = 1; x < columns; x++) {
    const start: Point = { x: x * cellSize, y: 0 }
    const end: Point = { x: x * cellSize, y: rows * cellSize }
    drawLine(context, start, end, color)
  }
}
