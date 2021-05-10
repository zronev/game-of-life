import Field from '../../core/field'
import Canvas from '../../ui/components/canvas'
import { Options } from '../options'
import { EventTarget } from '../../common/event-source'

class CanvasDrawer implements EventTarget {
  private canvas: Canvas

  constructor(private options: Options) {
    this.canvas = new Canvas(options.canvas)
  }

  public update(_field: Field) {
    this.clearScreen()
    this.drawGrid(_field)
  }

  private clearScreen() {
    const { ctx, domElement } = this.canvas
    ctx.clearRect(0, 0, domElement.width, domElement.height)
  }

  private drawGrid(_field: Field) {
    const rectSize = this.getRectSize()
    const { grid, rows, columns } = _field

    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const cell = grid[y][x]

        if (!cell) continue

        this.drawCell(
          x * rectSize,
          y * rectSize,
          rectSize,
          this.options.cell.color
        )
      }
    }
  }

  private getRectSize(): number {
    const { domElement } = this.canvas
    return Math.floor(domElement.width / this.options.grid.rows)
  }

  private drawCell(x: number, y: number, side: number, color?: string) {
    const { ctx } = this.canvas
    ctx.fillStyle = color || ''
    ctx.fillRect(x, y, side, side)
  }
}

export default CanvasDrawer
