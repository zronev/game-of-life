import Grid from '../grid'
import Spawner from './spawner'
import * as GridService from '../grid'

import { Point } from '../../common/types'
import { arrayClone, clamp, getRandomValue } from '../../common/utils'

class RandomSpawner extends Spawner {
  constructor(protected gridInstance: Grid) {
    super(gridInstance)
  }

  public spawn(amount: number) {
    const { grid } = this.gridInstance
    const gridCopy = arrayClone(grid)

    const availableCells = GridService.getAvailableCells(this.gridInstance)
    const resultAmount = clamp(amount, 0, availableCells)

    let count = 0
    while (count < resultAmount) {
      const point = this.getRandomCellCoordinate()
      const isCellUsed = gridCopy[point.y][point.x]

      if (isCellUsed) continue

      gridCopy[point.y][point.x] = true
      count++
    }

    this.gridInstance.grid = gridCopy
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
