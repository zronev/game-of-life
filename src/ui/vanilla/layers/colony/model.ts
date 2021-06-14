import type { Game } from '../../../../core/game'
import type { ColonyLayerState, GridHandler } from './types'
import { LayerModel } from '../layer/model'

export class ColonyLayerModel extends LayerModel<ColonyLayerState> {
  constructor(
    game: Game,
    initialState: ColonyLayerState,
    onGridChanged?: (callback: GridHandler) => void
  ) {
    super(game, initialState)

    if (onGridChanged) {
      onGridChanged(grid => {
        this.state = { ...this.state, grid }
      })
    }
  }
}
