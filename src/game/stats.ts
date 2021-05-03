import Field, * as FieldUtils from '../core/field'
import Generation from '../core/generation'

class Stats {
  constructor(private _generation: Generation, private _field: Field) {}

  public get generation(): number {
    return this._generation.count
  }

  public get population(): number {
    return FieldUtils.getUsedCellsCount(this._field.grid)
  }

  public isColonyDead(): boolean {
    return this.population === 0
  }
}

export default Stats
