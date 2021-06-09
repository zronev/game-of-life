import type { Field } from '../../field'
import Spawner from '../spawner'
import { GridFromCells, getAvailableCells } from '../../grid'
import { clone2DArray, clamp, getRandomValue } from '../../utils'

class RandomSpawner extends Spawner {
  constructor(protected _field: Field) {
    super(_field)
  }

  public spawn(amount: number): void {
    const { grid } = this._field
    const cellsCopy = clone2DArray(grid.cells)

    const availableCells = getAvailableCells(grid)
    const resultAmount = clamp(amount, 0, availableCells)

    let count = 0
    while (count < resultAmount) {
      const point = this._getRandomCellCoordinate()
      const isCellUsed = cellsCopy[point.y][point.x]

      if (isCellUsed) continue

      cellsCopy[point.y][point.x] = true
      count++
    }

    this._field.grid = new GridFromCells(cellsCopy)
  }

  private _getRandomCellCoordinate(): Point {
    const { rows, columns } = this._field.grid

    return {
      x: getRandomValue(0, rows - 1),
      y: getRandomValue(0, columns - 1),
    }
  }
}

export default RandomSpawner
