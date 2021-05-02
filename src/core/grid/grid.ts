import { GridType } from './types'
import { GridOptions } from '../../game'
import { createMatrix } from '../../common/utils'

class Grid {
  private _rows: number
  private _columns: number
  private _grid: GridType

  constructor(options: GridOptions, prepared?: GridType) {
    this._rows = options.rows
    this._columns = options.columns
    this._grid =
      prepared || createMatrix<boolean>(this.rows, this.columns, false)
  }

  public get grid(): GridType {
    return this._grid
  }

  public set grid(value: GridType) {
    this._grid = value
  }

  public get rows(): number {
    return this._rows
  }

  public get columns(): number {
    return this._columns
  }
}

export default Grid
