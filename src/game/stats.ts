import Grid from '../core/grid'
import * as GridService from '../core/grid'
import Generation from '../core/generation'

class Stats {
  constructor(private _generation: Generation, private _grid: Grid) {}

  public get generation(): number {
    return this._generation.count
  }

  public get population(): number {
    return GridService.getUsedCellsCount(this._grid)
  }

  public isColonyDead(): boolean {
    return this.population === 0
  }
}

export default Stats
