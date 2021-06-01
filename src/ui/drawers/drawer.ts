import { Options } from '../../game'
import { Canvas, Cell } from './types'

abstract class Drawer {
  protected _cellSize: number

  constructor(protected _canvas: Canvas, protected _options: Options) {
    this._cellSize = this._getCellSize()
    this._canvas.ctx.fillStyle = this._options.cell.color
  }

  abstract draw(...args: unknown[]): void

  public clear(): void {
    const { ctx, element } = this._canvas
    ctx.clearRect(0, 0, element.width, element.height)
  }

  protected _drawCell({ x, y, side }: Cell): void {
    this._canvas.ctx.fillRect(x, y, side, side)
  }

  public get cellSize(): number {
    return this._cellSize
  }

  protected _getCellSize(): number {
    const width = this._canvas.element.width
    const columns = this._options.grid.columns
    return Math.floor(width / columns)
  }
}

export default Drawer
