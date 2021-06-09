import type Field from '../../core/field'
import { Grid, getDefaultAmount } from '../../core/grid'
import { PatternSpawner, RandomSpawner } from '../../core/spawner'

class Spawners {
  private _randomSpawner: RandomSpawner
  private _patternSpawner: PatternSpawner

  constructor(private _field: Field) {
    this._randomSpawner = new RandomSpawner(_field)
    this._patternSpawner = new PatternSpawner(_field)
  }

  public randomSpawn(amount?: number): void {
    const defaultAmount = getDefaultAmount(this._field.grid)
    this._randomSpawner.spawn(amount || defaultAmount)
  }

  public patternSpawn(pattern: Grid, offset: Point): void {
    this._patternSpawner.spawn(pattern, offset)
  }
}

export default Spawners
