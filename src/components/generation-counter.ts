import Game from '../game'
import Counter from './counter'

class GenerationCounter extends Counter {
  constructor(private game: Game) {
    super('#info')
  }

  public updateGeneration() {
    this.update('generation', this.game.stats.generation)
  }
}

export default GenerationCounter
