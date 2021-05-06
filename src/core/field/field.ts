import { Grid } from './types'
import { GridOptions } from '../../game'
import { createMatrix } from '../../common/utils'
import EventSource from '../../common/event-source'

class Field extends EventSource {
  private _rows: number
  private _columns: number
  private _grid: Grid

  constructor(
    { rows, columns }: GridOptions,
    grid: Grid = createMatrix<boolean>(rows, columns, false)
  ) {
    super()

    this._rows = rows
    this._columns = columns
    this._grid = grid
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
}

export default Field
