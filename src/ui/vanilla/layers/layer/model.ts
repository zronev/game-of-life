import type { LayerState } from './types'
import type { Game } from '../../../../core/game'
import type { Sides } from '../../../../core/grid'

import { Model } from '../../common/mvc/model'

export class LayerModel<State extends LayerState = LayerState> extends Model<State> {
  constructor(protected _game: Game, initialState: State) {
    super(initialState)
  }

  public changeFieldSize(fieldSides: Sides): void {
    this._game.changeFieldSize(fieldSides)
  }
}
