import { Canvas } from '../canvas'
import Field from '../../core/field'
import { Options } from '../../game/options'
import { Cell, Drawer } from './types'

class ColonyDrawer implements Drawer {
  private _cellSize: number

  constructor(private _canvas: Canvas, private _options: Options) {
    this._cellSize = this._getCellSize()
    this._canvas.ctx.fillStyle = this._options.cell.color
  }

  public draw(_field: Field): void {
    const { grid, rows, columns } = _field

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const isCellAlive = grid[y][x]

        if (!isCellAlive) continue

        this._drawCell({
          x: x * this._cellSize,
          y: y * this._cellSize,
          side: this._cellSize,
        })
      }
    }
  }

  public clear(): void {
    const { ctx, element } = this._canvas
    ctx.clearRect(0, 0, element.width, element.height)
  }

  public get cellSize(): number {
    return this._cellSize
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

export default ColonyDrawer
