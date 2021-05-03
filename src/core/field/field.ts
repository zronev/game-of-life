import { Grid } from './types'
import { GridOptions } from '../../game'
import { createMatrix } from '../../common/utils'
import { EventSource, EventTarget } from '../../common/types'

class Field implements EventSource {
  private _rows: number
  private _columns: number
  private _grid: Grid
  private _eventTargets: EventTarget[] = []

  constructor(
    { rows, columns }: GridOptions,
    grid: Grid = createMatrix<boolean>(rows, columns, false)
  ) {
    this._rows = rows
    this._columns = columns
    this._grid = grid
  }

  public subscribe(target: EventTarget): void {
    const isExist = this._eventTargets.includes(target)

    if (isExist) return

    this._eventTargets.push(target)
  }

  public unsubscribe(target: EventTarget): void {
    this._eventTargets = this._eventTargets.filter(t => t !== target)
  }

  public notify(): void {
    for (const target of this._eventTargets) {
      target.update(this)
    }
  }

  public get grid(): Grid {
    return this._grid
  }

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