import Game from '../../game'
import Field, { Grid } from '../../core/field'
import { Listener } from '../../common/event'
import { Point } from '../../common/types'
import { patterns } from '../patterns'

class Model {
  private _pattern: Grid

  constructor(private _game: Game) {
    this._pattern = patterns.oscillators.beacon
  }

  public get pattern(): Grid {
    return this._pattern
  }

  public spawnPattern(pattern: Grid, position: Point): void {
    this._game.spawners.patternSpawn(pattern, position)
  }

  public subscribeOnGridChanged(listener: Listener<Field>): void {
    this._game.subscribeOnGridChanged(listener)
  }
}

export default Model
