import type { Cell, Layer } from './types'

export const setFillColor = (
  context: CanvasRenderingContext2D,
  color: string
): void => {
  context.fillStyle = color
}

export const drawCell = (
  context: CanvasRenderingContext2D,
  cell: Cell
): void => {
  context.fillRect(cell.x, cell.y, cell.side, cell.side)
}

export const clear = ({ context, canvas }: Layer): void => {
  context.clearRect(0, 0, canvas.width, canvas.height)
}
