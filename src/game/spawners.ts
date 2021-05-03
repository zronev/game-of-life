import Field, * as FieldUtils from '../core/field'
import { PatternSpawner, RandomSpawner } from '../core/spawner'

import { Point } from '../common/types'
import { Grid } from '../core/field'

class Spawners {
  private _randomSpawner: RandomSpawner
  private _patternSpawner: PatternSpawner

  constructor(private _field: Field) {
    this._randomSpawner = new RandomSpawner(_field)
    this._patternSpawner = new PatternSpawner(_field)
  }

  public randomSpawn(amount?: number) {
    const { rows, columns } = this._field
    const defaultAmount = FieldUtils.getDefaultAmount(rows, columns)
    this._randomSpawner.spawn(amount || defaultAmount)
  }

  public patternSpawn(pattern: Grid, offset?: Point) {
    this._patternSpawner.spawn(pattern, offset)
  }
}

export default Spawners
