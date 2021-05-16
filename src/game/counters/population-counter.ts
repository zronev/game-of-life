import Counter from './counter'
import Field, { FieldUtils } from '../../core/field'
import Game from '../game'

class PopulationCounter extends Counter {
  constructor(game: Game) {
    super()
    game.subscribeToField(this)
  }

  update(_field: Field): void {
    this._count = FieldUtils.getUsedCells(_field)
    this.notify()
  }
}

export default PopulationCounter
