import Game from '../core/game'
import Counter from './counter'

class GenerationCounter extends Counter {
  constructor(private game: Game) {
    super('#info')
  }

  public updateGeneration() {
    this.update('generation', this.game.getGeneration())
  }
}

export default GenerationCounter
