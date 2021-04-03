import Grid from './grid'
import Rules from './rules'

import { countNeighbours } from './utils'
import { arrayClone } from '../common/utils'
import { GridType, RulesState } from './types'

class Generation {
  private count: number
  private grid: Grid
  private rules: Rules

  constructor(grid: Grid) {
    this.grid = grid
    this.rules = new Rules()
    this.count = 0
  }

  public next() {
    const grid = this.grid.getGrid()
    const rows = this.grid.getRows()
    const columns = this.grid.getColumns()
    const gridCopy = arrayClone(grid)

    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const cell = gridCopy[y][x]
        const neighbours = countNeighbours(x, y, grid, rows, columns)
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
