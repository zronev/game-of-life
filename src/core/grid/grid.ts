import { GridType } from './types'
import { GridOptions } from '../../game'
import { createMatrix } from '../../common/utils'
import { EventSource, EventTarget } from '../../common/types'

class Grid implements EventSource {
  private _rows: number
  private _columns: number
  private _grid: GridType
  private _eventTargets: EventTarget[] = []

  constructor(options: GridOptions, prepared?: GridType) {
    this._rows = options.rows
    this._columns = options.columns
    this._grid =
      prepared || createMatrix<boolean>(this.rows, this.columns, false)
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

  public get grid(): GridType {
    return this._grid
  }

  public set grid(newGrid: GridType) {
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

export default Grid
