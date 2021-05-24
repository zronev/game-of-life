import { Canvas } from '../canvas'
import { Point } from '../../common/types'
import { Grid } from '../../core/field'
import { Options } from '../../game'
import { Cell, Drawer } from './types'

class PreviewDrawer implements Drawer {
  private _cellSize: number

  constructor(private _canvas: Canvas, private _options: Options) {
    this._cellSize = this._getCellSize()
    this._canvas.ctx.fillStyle = this._options.cell.color
  }

  public get cellSize(): number {
    return this._cellSize
  }

  public draw(
    pattern: Grid,
    offset: Point = {
      x: 0,
      y: 0,
    }
  ): void {
    const rows = pattern[0].length
    const columns = pattern.length

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const isCellAlive = pattern[y][x]

        if (!isCellAlive) continue

        this._drawCell({
          x: (x + offset.x) * this._cellSize,
          y: (y + offset.y) * this._cellSize,
          side: this._cellSize,
        })
      }
    }
  }

  public clear(): void {
    const { ctx, element } = this._canvas
    ctx.clearRect(0, 0, element.width, element.height)
  }

  private _drawCell({ x, y, side }: Cell) {
    this._canvas.ctx.fillRect(x, y, side, side)
  }

  private _getCellSize(): number {
    const width = this._canvas.element.width
    const columns = this._options.grid.columns
    return Math.floor(width / columns)
  }
}

export default PreviewDrawer
