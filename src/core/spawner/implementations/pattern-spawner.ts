import Spawner from '../spawner'
import { Grid, GridFromCells } from '../../grid'
import { clone2DArray } from '../../utils'

class PatternSpawner extends Spawner {
  public spawn(pattern: Grid, offset: Point): void {
    if (this._isValidPattern(pattern)) this._placeInGrid(pattern, offset)
  }

  private _isValidPattern(pattern: Grid): boolean {
    const { rows, columns } = this._field.grid
    return pattern.rows <= rows && pattern.columns <= columns
  }

  private _placeInGrid(pattern: Grid, offset: Point) {
    const { rows, columns, cells } = this._field.grid
    const cellsCopy = clone2DArray(cells)

    for (let y = 0; y < pattern.rows; y++) {
      for (let x = 0; x < pattern.columns; x++) {
        const cellY = y + offset.y
        const cellX = x + offset.x

        const isBeyondBorder =
          cellY < 0 || cellX < 0 || cellY >= rows || cellX >= columns

        if (isBeyondBorder) continue

        const isCellAlive = pattern.cells[y][x]

        if (isCellAlive) cellsCopy[cellY][cellX] = isCellAlive
      }
    }

    this._field.grid = new GridFromCells(cellsCopy)
  }
}

export default PatternSpawner
