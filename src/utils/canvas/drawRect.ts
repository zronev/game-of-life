import Canvas from './canvas'

const drawRect = (
  x: number,
  y: number,
  width: number,
  height: number,
  color?: string
) => {
  const canvas = Canvas.getInstance()
  const ctx = canvas.getContext()
  ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)
}

export const drawSquare = (x: number, y: number, side: number, color?: string) =>
  drawRect(x, y, side, side, color)

export default drawRect
