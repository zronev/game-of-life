import { Grid } from './types'
import { GridOptions } from '../../game'
import { FieldUtils } from '.'
import { createGrid } from '../../common/utils'
import { Event } from '../../common/event'

type GridChangeEvent = Event<Field>

class Field {
  private _rows: number
  private _columns: number
  private _grid: Grid
  private _onGridChanged: GridChangeEvent

  constructor(options: GridOptions, customGrid?: Grid) {
    this._rows = options.rows
    this._columns = options.columns
    this._grid = customGrid || this._getDefaultGrid(options)
    this._onGridChanged = new Event()
  }

  public get onGridChanged(): GridChangeEvent {
    return this._onGridChanged
  }

  public get grid(): Grid {
    return this._grid
  }

  public set grid(newGrid: Grid) {
    this._grid = newGrid
    this._onGridChanged.trigger(this)
  }

  public get rows(): number {
    return this._rows
  }

  public get columns(): number {
    return this._columns
  }

  public clear(): void {
    this.grid = FieldUtils.getEmptyGrid(this)
  }

  private _getDefaultGrid({ rows, columns }: GridOptions): Grid {
    return createGrid(rows, columns, false)
  }
}

export default Field
