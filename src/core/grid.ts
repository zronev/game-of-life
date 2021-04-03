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

  public getGrid() {
    return this.grid
  }

  public setGrid(grid: GridType) {
    this.grid = grid
  }

  public getRows() {
    return this.rows
  }

  public getColumns() {
    return this.columns
  }

  private makeGrid() {
    return Array<boolean[]>(this.rows)
      .fill([])
      .map(() => Array(this.columns).fill(false))
  }
}

export default Grid
