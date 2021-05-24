import Drawer from './drawer'
import { Canvas } from '../canvas'
import { Point } from '../../common/types'
import { Grid } from '../../core/field'
import { Options } from '../../game'

class PreviewDrawer extends Drawer {
  constructor(canvas: Canvas, options: Options) {
    super(canvas, options)
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
}

export default PreviewDrawer
