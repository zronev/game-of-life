import Spawner from './spawner'
import Field, { FieldUtils } from '../field'

import { Point } from '../../common/types'
import { clone2DArray, clamp, getRandomValue } from '../../common/utils'

class RandomSpawner extends Spawner {
  constructor(protected _field: Field) {
    super(_field)
  }

  public spawn(amount: number): void {
    const { grid } = this._field
    const gridCopy = clone2DArray(grid)

    const availableCells = FieldUtils.getAvailableCells(this._field)
    const resultAmount = clamp(amount, 0, availableCells)

    let count = 0
    while (count < resultAmount) {
      const point = this._getRandomCellCoordinate()
      const isCellUsed = gridCopy[point.y][point.x]

      if (isCellUsed) continue

      gridCopy[point.y][point.x] = true
      count++
    }

    this._field.grid = gridCopy
  }

  private _getRandomCellCoordinate(): Point {
    const { rows, columns } = this._field

    return {
      x: getRandomValue(0, rows - 1),
      y: getRandomValue(0, columns - 1),
    }
  }
}

export default RandomSpawner
