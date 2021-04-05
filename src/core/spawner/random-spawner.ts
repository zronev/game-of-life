import Grid from '../grid/grid'
import Spawner from './spawner'
import GridService from '../grid/grid-service'

import { Point } from '../../common/types'
import { clamp, getRandomValue } from '../../common/utils'

class RandomSpawner extends Spawner {
  private gridService: GridService

  constructor(protected grid: Grid) {
    super(grid)
    this.gridService = new GridService(grid)
  }

  public spawnRandomCells(amount: number) {
    const grid = this.grid.getGrid()
    const availableCells = this.gridService.getAvailableCells()
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

export default RandomSpawner
