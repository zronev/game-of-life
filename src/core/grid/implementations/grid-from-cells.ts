import { Cells, Grid } from '../types'
import { getMaxSides } from '../utils'

export class GridFromCells implements Grid {
  private _rows: number
  private _columns: number
  private _cells: Cells

  constructor(cells: Cells) {
    const { rows, columns } = getMaxSides(cells)

    this._rows = rows
    this._columns = columns
    this._cells = cells
  }

  get cells(): Cells {
    return this._cells
  }

  get rows(): number {
    return this._rows
  }

  get columns(): number {
    return this._columns
  }
}
