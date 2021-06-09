import { createCells } from '../utils'
import type { Cells, Grid, Sides } from '../types'

export class GridFromOptions implements Grid {
  private _rows: number
  private _columns: number
  private _cells: Cells

  constructor(sides: Sides) {
    this._rows = sides.rows
    this._columns = sides.columns
    this._cells = createCells(sides)
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
