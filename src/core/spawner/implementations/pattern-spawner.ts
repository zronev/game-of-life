import Spawner from '../spawner'
import { Grid, GridFromCells } from '../../grid'
import { clone2DArray } from '../../../common/utils'

class PatternSpawner extends Spawner {
  public spawn(pattern: Grid, offset: Point): void {
    if (this._isValidPattern(pattern)) {
      this._placeInGrid(pattern, offset)
    }
  }

  private _isValidPattern(pattern: Grid): boolean {
    const { rows, columns } = this._field.grid

    return pattern.rows <= rows && pattern.columns <= columns
  }

  private _placeInGrid(pattern: Grid, offset: Point) {
    const { rows, columns, cells } = pattern
    const cellsCopy = clone2DArray(this._field.grid.cells)

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const cellY = y + offset.y
        const cellX = x + offset.x

        const isBeyondBorder =
          cellY < 0 ||
          cellX < 0 ||
          cellY >= this._field.grid.rows ||
          cellX >= this._field.grid.columns

        if (isBeyondBorder) continue

        cellsCopy[cellY][cellX] = cells[y][x]
      }
    }

    this._field.grid = new GridFromCells(cellsCopy)
  }
}

export default PatternSpawner
