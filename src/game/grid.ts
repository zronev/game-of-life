import { GridType } from './types'

class Grid {
  private rows: number
  private columns: number
  private grid: GridType

  constructor(rows: number, columns: number) {
    this.rows = rows
    this.columns = columns
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
