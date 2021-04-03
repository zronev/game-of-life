import Grid from './grid'
import { Point } from '../common/types'
import { getRandomValue } from '../common/utils'

class Spawner {
  private grid: Grid

  constructor(grid: Grid) {
    this.grid = grid
  }

  public spawnRandomCells(amount: number) {
    const grid = this.grid.getGrid()

    for (let y = 0; y < amount; y++) {
      const point = this.getRandomCellCoordinate()
      grid[point.y][point.x] = true
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
