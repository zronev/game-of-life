import Grid from '../grid'
import Spawner from './spawner'
import * as GridService from '../grid'

import { Point } from '../../common/types'
import { clamp, getRandomValue } from '../../common/utils'

class RandomSpawner extends Spawner {
  constructor(protected gridInstance: Grid) {
    super(gridInstance)
  }

  public spawn(amount: number) {
    const { grid } = this.gridInstance
    const availableCells = GridService.getAvailableCells(this.gridInstance)
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
    const { rows, columns } = this.gridInstance

    return {
      x: getRandomValue(0, rows - 1),
      y: getRandomValue(0, columns - 1),
    }
  }
}

export default RandomSpawner
