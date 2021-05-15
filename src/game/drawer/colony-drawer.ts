import Field from '../../core/field'
import Canvas from '../../ui/components/canvas'
import { Options } from '../options'
import { EventTarget } from '../../common/event-source'
import { Cell } from './types'

class ColonyDrawer implements EventTarget {
  private _canvas: Canvas
  private _cellSize: number

  constructor(private _options: Options) {
    this._canvas = new Canvas({
      ..._options.canvas,
      className: 'colony-canvas',
    })
    this._cellSize = this._getCellSize()
  }

  public update(_field: Field) {
    this._clearScreen()
    this._drawGrid(_field)
  }

  private _clearScreen() {
    const { ctx, domElement } = this._canvas
    ctx.clearRect(0, 0, domElement.width, domElement.height)
  }

  private _drawGrid(_field: Field) {
    const { grid, rows, columns } = _field

    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const isCellAlive = grid[y][x]

        if (!isCellAlive) continue

        this._drawCell({
          x: x * this._cellSize,
          y: y * this._cellSize,
          side: this._cellSize,
          color: this._options.cell.color,
        })
      }
    }
  }

  private _getCellSize(): number {
    const { domElement } = this._canvas
    return Math.floor(domElement.width / this._options.grid.rows)
  }

  private _drawCell({ x, y, side, color = '' }: Cell) {
    const { ctx } = this._canvas
    ctx.fillStyle = color
    ctx.fillRect(x, y, side, side)
  }
}

export default ColonyDrawer
