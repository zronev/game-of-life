import Canvas from './canvas'
import Grid from '../core/grid'
import { ALIVE_CELL_COLOR } from '../common/constants'

class Drawer {
  private canvas: Canvas

  constructor() {
    this.canvas = Canvas.getInstance()
  }

  public drawGrid(gridInstance: Grid) {
    this.clearScreen()

    // TODO: deal with size of rect and grid
    const rectSize = 16

    const grid = gridInstance.getGrid()
    const rows = gridInstance.getRows()
    const columns = gridInstance.getColumns()

    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const cell = grid[y][x]

        if (!cell) continue

        this.drawSquare({
          x: x * rectSize,
          y: y * rectSize,
          side: rectSize,
          color: ALIVE_CELL_COLOR,
        })
      }
    }
  }

  private drawRect({
    x,
    y,
    width,
    height,
    color,
  }: {
    x: number
    y: number
    width: number
    height: number
    color?: string
  }) {
    const ctx = this.canvas.getContext()
    ctx.fillStyle = color || ''
    ctx.fillRect(x, y, width, height)
  }

  private drawSquare({
    x,
    y,
    side,
    color,
  }: {
    x: number
    y: number
    side: number
    color?: string
  }) {
    this.drawRect({ x, y, width: side, height: side, color })
  }

  private clearScreen() {
    const ctx = this.canvas.getContext()
    const canvasElement = this.canvas.getDOMElement()
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)
  }
}

export default Drawer
