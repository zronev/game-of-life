import { Model } from '../common/mvc/model'
import { getUsedCells, Grid } from '../../../core/grid'
import type { InfoState } from './types'
import type { Game } from '../../../core/game'

export class InfoModel extends Model<InfoState> {
  constructor(game: Game, initialState = { population: 0, generation: 0 }) {
    super(initialState)
    this._subscribeToExternalModel(game)
  }

  private _subscribeToExternalModel(game: Game): void {
    const field = game.getEmitter('field')
    field.addListener('GRID_CHANGED', (grid: Grid) => {
      this.state = {
        ...this.state,
        population: getUsedCells(grid),
      }
    })

    const generation = game.getEmitter('generation')
    generation.addListener('GENERATION_CHANGED', () => {
      this.state = {
        ...this.state,
        generation: this.state.generation + 1,
      }
    })
  }
}
