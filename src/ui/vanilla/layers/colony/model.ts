import type { ColonyLayerState } from './types'
import type { Game } from '../../../../core/game'
import type { Grid } from '../../../../core/grid'

import { LayerModel } from '../layer/model'

export class ColonyLayerModel extends LayerModel<ColonyLayerState> {
  constructor(game: Game, initialState: ColonyLayerState) {
    super(game, initialState)
    this._subscribeToExternalModel(this._game)
  }

  private _subscribeToExternalModel(game: Game): void {
    const field = game.getEmitter('field')
    field.addListener('GRID_CHANGED', (grid: Grid) => {
      this.state = { ...this.state, grid }
    })
  }
}
