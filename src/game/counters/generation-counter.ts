import Game from '../game'
import Counter from './counter'

class GenerationCounter extends Counter {
  constructor(game: Game) {
    super()
    game.subscribeToGeneration(this)
  }

  update(): void {
    this._count = this._count + 1
    this.notify()
  }
}

export default GenerationCounter
