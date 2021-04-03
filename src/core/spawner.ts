import Grid from './grid'
import { Point } from '../common/types'
import { clamp, getRandomValue } from '../common/utils'

class Spawner {
  private grid: Grid

  constructor(grid: Grid) {
    this.grid = grid
  }

  public spawnRandomCells(amount: number) {
    const grid = this.grid.getGrid()
    const availableCells = this.grid.getAvailableCells()
    const resultAmount = clamp(amount, 0, availableCells)

    let count = 0

    while (count < resultAmount) {
      const point = this.getRandomCellCoordinate()
      const isCellUsed = grid[point.y][point.x]

      if (isCellUsed) continue

      grid[point.y][point.x] = true
      count++
    }
  }

  private getRandomCellCoordinate(): Point {
    const rows = this.grid.getRows()
    const columns = this.grid.getColumns()

    return {
      x: getRandomValue(0, rows - 1),
      y: getRandomValue(0, columns - 1),
    }
  }
}

export default Spawner
