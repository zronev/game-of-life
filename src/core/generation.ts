import Rules from './rules'
import Grid from './grid/grid'
import GridService from './grid/grid-service'

import { arrayClone } from '../common/utils'
import { GridType, RulesState } from './utility/types'

class Generation {
  private count: number
  private rules: Rules
  private gridService: GridService

  constructor(private grid: Grid) {
    this.count = 0
    this.rules = new Rules()
    this.gridService = new GridService(grid)
  }

  public next() {
    const grid = this.grid.getGrid()
    const rows = this.grid.getRows()
    const columns = this.grid.getColumns()
    const gridCopy = arrayClone(grid)

    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const cell = gridCopy[y][x]
        const neighbours = this.gridService.countNeighbours(x, y)
        const rulesState = this.rules.applyRules(cell, neighbours)
        this.changeCellState(x, y, gridCopy, rulesState)
      }
    }

    this.grid.setGrid(gridCopy)
    this.increaseCount()
  }

  public getCount(): number {
    return this.count
  }

  private changeCellState(
    x: number,
    y: number,
    grid: GridType,
    rulesState: RulesState
  ) {
    switch (rulesState) {
      case 'alive':
        grid[y][x] = true
        break
      case 'dead':
        grid[y][x] = false
        break
      default:
        break
    }
  }

  private increaseCount() {
    this.count++
  }
}

export default Generation
