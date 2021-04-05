import Canvas from './canvas'
import Grid from '../core/grid/grid'
import { GameOptions } from '../core/utility/options'

class Drawer {
  private canvas: Canvas

  constructor(private options: GameOptions) {
    this.canvas = Canvas.getInstance()
  }

  public update(gridInstance: Grid) {
    this.clearScreen()
    this.drawGrid(gridInstance)
  }

  private clearScreen() {
    const ctx = this.canvas.getContext()
    const canvasElement = this.canvas.getDOMElement()
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)
  }

  private drawGrid(gridInstance: Grid) {
    const rectSize = this.getRectSize()
    const grid = gridInstance.getGrid()
    const rows = gridInstance.getRows()
    const columns = gridInstance.getColumns()

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
    return this.options.canvas.width / this.options.grid.rows
  }

  private drawCell(x: number, y: number, side: number, color?: string) {
    const ctx = this.canvas.getContext()
    ctx.fillStyle = color || ''
    ctx.fillRect(x, y, side, side)
  }
}

export default Drawer
