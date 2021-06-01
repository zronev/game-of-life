import Drawer from './drawer'
import Field from '../../core/field'
import { Canvas } from './types'
import { Options } from '../../game/options'

class ColonyDrawer extends Drawer {
  constructor(canvas: Canvas, options: Options) {
    super(canvas, options)
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
}

export default ColonyDrawer
