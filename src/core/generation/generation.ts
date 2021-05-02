import Grid from '../grid'
import * as GridService from '../grid'
import { RulesResult, Rules } from '../rules'
import { arrayClone } from '../../common/utils'

class Generation {
  private _count: number

  constructor(private _gridInstance: Grid, private _rules: Rules) {
    this._count = 0
  }

  get count(): number {
    return this._count
  }

  public next() {
    this.changeGenerationOnGrid()
    this._count++
  }

  private changeGenerationOnGrid() {
    const { grid, rows, columns } = this._gridInstance
    const gridCopy = arrayClone(grid)

    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const cell = gridCopy[y][x]
        const neighbours = GridService.countNeighbours(this._gridInstance, x, y)
        const rulesState = this._rules.applyRules(cell, neighbours)
        gridCopy[y][x] = this.getCellState(cell, rulesState)
      }
    }

    this._gridInstance.grid = gridCopy
  }

  private getCellState(
    currentCellState: boolean,
    rulesResult: RulesResult
  ): boolean {
    switch (rulesResult) {
      case 'alive':
        return true
      case 'dead':
        return false
      default:
        return currentCellState
    }
  }
}

export default Generation
