import { Grid } from './types'
import { GridOptions } from '../../game'
import { FieldUtils } from '.'
import EventSource from '../../common/event-source'
import { createGrid } from '../../common/utils'

class Field extends EventSource {
  private _rows: number
  private _columns: number
  private _grid: Grid

  constructor(options: GridOptions, grid?: Grid) {
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

  public clear() {
    this.grid = FieldUtils.getEmptyGrid(this)
  }

  private getDefaultGrid({ rows, columns }: GridOptions): Grid {
    return createGrid(rows, columns, false)
  }
}

export default Field
