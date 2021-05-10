import Field, { FieldUtils } from '../field'

class Population {
  constructor(private _field: Field) {}

  public get count(): number {
    return FieldUtils.getUsedCells(this._field)
  }

  public isColonyDead(): boolean {
    return this.count === 0
  }
}

export default Population
