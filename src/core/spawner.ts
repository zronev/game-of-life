import Grid from './grid'
import { Point } from '../common/types'
import { arrayClone, getRandomValue } from '../common/utils'

class Spawner {
  private grid: Grid

  constructor(grid: Grid) {
    this.grid = grid
  }

  public spawnRandomCells(amount: number) {
    const gridCopy = arrayClone(this.grid.getGrid())

    for (let y = 0; y < amount; y++) {
      const point = this.getRandomCellCoordinate()
      gridCopy[point.y][point.x] = true
    }

    this.grid.setGrid(gridCopy)
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
