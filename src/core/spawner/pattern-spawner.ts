import Spawner from './spawner'
import { Point } from '../../common/types'
import { arrayClone } from '../../common/utils'

class PatternSpawner extends Spawner {
  public spawn(pattern: boolean[][], offset?: Point) {
    const isValidPattern = this.isValidPattern(pattern)

    if (isValidPattern) this.placeInGrid(pattern, offset)
  }

  private isValidPattern(pattern: boolean[][]): boolean {
    const gridRows = this.grid.getRows()
    const gridColumns = this.grid.getColumns()

    const patternRows = pattern[0].length
    const patternColumns = pattern.length

    return patternRows <= gridRows && patternColumns <= gridColumns
  }

  private placeInGrid(
    pattern: boolean[][],
    offset: Point = {
      x: 0,
      y: 0,
    }
  ) {
    const gridCopy = arrayClone(this.grid.getGrid())

    const patternRows = pattern[0].length
    const patternColumns = pattern.length

    for (let y = 0; y < patternColumns; y++) {
      for (let x = 0; x < patternRows; x++) {
        gridCopy[y + offset.y][x + offset.x] = pattern[y][x]
      }
    }

    this.grid.setGrid(gridCopy)
  }
}

export default PatternSpawner
