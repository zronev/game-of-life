import Spawner from './spawner'
import { arrayClone } from '../common/utils'

class PatternSpawner extends Spawner {
  public spawnPattern(pattern: boolean[][]) {
    const isValidPattern = this.isValidPattern(pattern)

    if (isValidPattern) this.placeInGrid(pattern)
  }

  private isValidPattern(pattern: boolean[][]): boolean {
    const gridRows = this.grid.getRows()
    const gridColumns = this.grid.getColumns()

    const patternRows = pattern[0].length
    const patternColumns = pattern.length

    return patternRows <= gridRows && patternColumns <= gridColumns
  }

  private placeInGrid(pattern: boolean[][]) {
    const gridCopy = arrayClone(this.grid.getGrid())

    const patternRows = pattern[0].length
    const patternColumns = pattern.length

    for (let y = 0; y < patternColumns; y++) {
      for (let x = 0; x < patternRows; x++) {
        gridCopy[y][x] = pattern[x][y]
      }
    }

    this.grid.setGrid(gridCopy)
  }
}

export default PatternSpawner
