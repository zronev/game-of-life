import { Grid } from './types'
import { GridOptions } from '../../game'
import { createMatrix } from '../../common/utils'
import EventSource from '../../common/event-source'

class Field extends EventSource {
  private _rows: number
  private _columns: number
  private _grid: Grid

  constructor(options: GridOptions, grid: Grid) {
    super()
    this._rows = options.rows
    this._columns = options.columns
    this._grid = grid || this.getDefaultGrid(options)
  }

  public get grid(): Grid {
    return this._grid
  }

  // TODO: maybe try to use a decorator here?
  public set grid(newGrid: Grid) {
    this._grid = newGrid
    this.notify()
  }

  public get rows(): number {
    return this._rows
  }

  public get columns(): number {
    return this._columns
  }

  private getDefaultGrid({ rows, columns }: GridOptions): Grid {
    return createMatrix<boolean>(rows, columns, false)
  }
}

export default Field
