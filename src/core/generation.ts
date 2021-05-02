import Rules from './rules'
import Grid from './grid/grid'
import GridService from './grid/grid-service'

import { arrayClone } from '../common/utils'
import { RulesResult } from './utility/types'

class Generation {
  private _count: number
  private _rules: Rules
  private _gridService: GridService

  constructor(private _gridInstance: Grid) {
    this._count = 0
    this._rules = new Rules()
    this._gridService = new GridService(_gridInstance)
  }

  get count(): number {
    return this._count
  }

  public next() {
    const { grid, rows, columns } = this._gridInstance
    const gridCopy = arrayClone(grid)

    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const cell = gridCopy[y][x]
        const neighbours = this._gridService.countNeighbours(x, y)
        const rulesState = this._rules.applyRules(cell, neighbours)
        gridCopy[y][x] = this.getCellState(cell, rulesState)
      }
    }

    this._gridInstance.grid = gridCopy
    this._count++
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
