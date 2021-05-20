import Spawner from './spawner'
import { Point } from '../../common/types'
import { arrayClone } from '../../common/utils'

class PatternSpawner extends Spawner {
  public spawn(pattern: boolean[][], offset?: Point): void {
    if (this._isValidPattern(pattern)) {
      this._placeInGrid(pattern, offset)
    }
  }

  private _isValidPattern(pattern: boolean[][]): boolean {
    const { rows, columns } = this._field
    const patternRows = pattern[0].length
    const patternColumns = pattern.length

    return patternRows <= rows && patternColumns <= columns
  }

  private _placeInGrid(
    pattern: boolean[][],
    offset: Point = {
      x: 0,
      y: 0,
    }
  ) {
    const gridCopy = arrayClone(this._field.grid)
    const patternRows = pattern[0].length
    const patternColumns = pattern.length

    for (let y = 0; y < patternColumns; y++) {
      for (let x = 0; x < patternRows; x++) {
        gridCopy[y + offset.y][x + offset.x] = pattern[y][x]
      }
    }

    this._field.grid = gridCopy
  }
}

export default PatternSpawner
