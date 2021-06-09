import { Grid, GridFromOptions } from '../grid'
import { Emitter } from '../event-emitter'

export type FieldEventMap = {
  GRID_CHANGED: Grid
}

export class Field {
  private _eventEmitter: Emitter<FieldEventMap>

  constructor(private _grid: Grid) {
    this._eventEmitter = new Emitter()
  }

  public get eventEmitter(): Emitter<FieldEventMap> {
    return this._eventEmitter
  }

  public get grid(): Grid {
    return this._grid
  }

  public set grid(newGrid: Grid) {
    this._grid = newGrid
    this._eventEmitter.dispatch('GRID_CHANGED', this._grid)
  }

  public clear(): void {
    const { rows, columns } = this._grid
    this.grid = new GridFromOptions({ rows, columns })
  }
}
