import Drawer from './drawer'
import { Canvas } from './types'

import { Options } from '../../game/options'
import { Point } from '../../common/types'

class GridDrawer extends Drawer {
  constructor(canvas: Canvas, options: Options) {
    super(canvas, options)
  }

  public draw(): void {
    this._drawGrid()
  }

  private _drawGrid() {
    const { rows, columns } = this._options.grid

    for (let y = 1; y < rows; y++) {
      const start: Point = { x: 0, y: y * this._cellSize }
      const end: Point = { x: columns * this._cellSize, y: y * this._cellSize }
      this._drawLine(start, end)
    }

    for (let x = 1; x < columns; x++) {
      const start: Point = { x: x * this._cellSize, y: 0 }
      const end: Point = { x: x * this._cellSize, y: rows * this._cellSize }
      this._drawLine(start, end)
    }
  }

  private _drawLine(start: Point, end: Point) {
    const { ctx } = this._canvas

    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.lineWidth = 0.25
    ctx.strokeStyle = '#0984e3'
    ctx.stroke()
  }
}

export default GridDrawer
