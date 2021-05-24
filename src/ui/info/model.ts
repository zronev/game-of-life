import { Listener } from '../../common/event'
import Field from '../../core/field'
import Game from '../../game'

class Model {
  constructor(private _game: Game) {}

  public subscribeOnGridChanged(listener: Listener<Field>): void {
    this._game.subscribeOnGridChanged(listener)
  }

  public subscribeOnGenerationChanged(listener: Listener): void {
    this._game.subscribeOnGenerationChanged(listener)
  }
}

export default Model
