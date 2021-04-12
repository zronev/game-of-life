import Canvas from './canvas'
import Grid from '../core/grid/grid'
import { GameOptions } from '../core/utility/options'

class Drawer {
  constructor(private options: GameOptions, private canvas: Canvas) {}

  public update(gridInstance: Grid) {
    this.clearScreen()
    this.drawGrid(gridInstance)
  }

  private clearScreen() {
    const { ctx, domElement } = this.canvas
    ctx.clearRect(0, 0, domElement.width, domElement.height)
  }

  private drawGrid(gridInstance: Grid) {
    const rectSize = this.getRectSize()
    const { grid, rows, columns } = gridInstance

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

export default Drawer
