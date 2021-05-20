import { Options } from '../../game/options'
import { Point } from '../../common/types'
import { Drawer } from './types'
import CanvasView from '../game-field/canvas'

class GridDrawer implements Drawer {
  constructor(private _canvas: CanvasView, private _options: Options) {}

  public draw(): void {
    const { rows, columns } = this._options.grid
    const cellSize = this._getCellSize()

    for (let y = 1; y < rows; y++) {
      const start: Point = { x: 0, y: y * cellSize }
      const end: Point = { x: columns * cellSize, y: y * cellSize }
      this._drawLine(start, end)
    }

    for (let x = 1; x < columns; x++) {
      const start: Point = { x: x * cellSize, y: 0 }
      const end: Point = { x: x * cellSize, y: rows * cellSize }
      this._drawLine(start, end)
    }
  }

  public clear(): void {
    const { ctx, element } = this._canvas
    ctx.clearRect(0, 0, element.width, element.height)
  }

  private _drawLine(start: Point, end: Point) {
    const { ctx } = this._canvas

    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.lineWidth = 0.3
    ctx.strokeStyle = '#0984e3'
    ctx.stroke()
  }

  private _getCellSize(): number {
    const width = this._canvas.element.width
    const columns = this._options.grid.columns
    return Math.floor(width / columns)
  }
}

export default GridDrawer
