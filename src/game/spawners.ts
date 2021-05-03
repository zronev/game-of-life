import Grid, * as GridService from '../core/grid'
import { PatternSpawner, RandomSpawner } from '../core/spawner'

import { Point } from '../common/types'
import { GridType } from '../core/grid'

class Spawners {
  private _randomSpawner: RandomSpawner
  private _patternSpawner: PatternSpawner

  constructor(private _gridInstance: Grid) {
    this._randomSpawner = new RandomSpawner(_gridInstance)
    this._patternSpawner = new PatternSpawner(_gridInstance)
  }

  public randomSpawn(amount?: number) {
    const defaultAmount = GridService.getDefaultAmount(this._gridInstance)
    this._randomSpawner.spawn(amount || defaultAmount)
  }

  public patternSpawn(pattern: GridType, offset?: Point) {
    this._patternSpawner.spawn(pattern, offset)
  }
}

export default Spawners
