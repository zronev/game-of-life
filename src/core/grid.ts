import { GridOptions, GridType } from './types'

class Grid {
  private rows: number
  private columns: number
  private grid: GridType

  constructor(options: GridOptions) {
    this.rows = options.rows
    this.columns = options.columns
    this.grid = this.makeGrid()
  }

  public getAvailableCells(): number {
    const maxAmount = this.rows * this.columns
    const usedCellsCount = this.grid.reduce(
      (count, col) =>
        count + col.reduce((count, cell) => (cell ? count + 1 : count), 0),
      0
    )

    return maxAmount - usedCellsCount
  }

  public getGrid(): GridType {
    return this.grid
  }

  public setGrid(grid: GridType) {
    this.grid = grid
  }

  public getRows(): number {
    return this.rows
  }

  public getColumns(): number {
    return this.columns
  }

  private makeGrid(): GridType {
    return Array<boolean[]>(this.rows)
      .fill([])
      .map(() => Array(this.columns).fill(false))
  }
}

export default Grid
