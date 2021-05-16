import { Options } from '../../game/options'
import { Point } from '../../common/types'
import CanvasView from '../game-field/canvas'

class GridDrawer {
  constructor(private _canvas: CanvasView, private _options: Options) {}

  public draw() {
    const { rows, columns } = this._options.grid
    const cellSize = this._getCellSize()

    for (let y = 1; y < columns; y++) {
      const start: Point = { x: 0, y: y * cellSize }
      const end: Point = { x: rows * cellSize, y: y * cellSize }
      this.drawLine(start, end)
    }

    for (let x = 1; x < rows; x++) {
      const start: Point = { x: x * cellSize, y: 0 }
      const end: Point = { x: x * cellSize, y: columns * cellSize }
      this.drawLine(start, end)
    }
  }

  private drawLine(start: Point, end: Point) {
    const { ctx } = this._canvas

    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.lineWidth = 0.3
    ctx.strokeStyle = '#0984e3'
    ctx.stroke()
  }

  private _getCellSize(): number {
    const { element } = this._canvas
    return Math.floor(element.width / this._options.grid.rows)
  }
}

export default GridDrawer
