import Rules from './rules'
import Grid from './grid'
import * as GridService from './grid'

import { arrayClone } from '../common/utils'
import { RulesResult } from './utility/types'

class Generation {
  private _count: number
  private _rules: Rules

  constructor(private _gridInstance: Grid) {
    this._count = 0
    this._rules = new Rules()
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
        const neighbours = GridService.countNeighbours(this._gridInstance, x, y)
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
