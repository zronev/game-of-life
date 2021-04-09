import { GridType } from '../utility/types'
import { GridOptions } from '../utility/options'
import { createMatrix } from '../../common/utils'

class Grid {
  private rows: number
  private columns: number
  private grid: GridType

  constructor(options: GridOptions) {
    this.rows = options.rows
    this.columns = options.columns
    this.grid = createMatrix<boolean>(this.rows, this.columns, false)
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
}

export default Grid
