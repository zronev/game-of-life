import Game from '../core/game'
import Counter from './counter'

class GenerationCounter extends Counter {
  constructor(private game: Game) {
    super('#info')
  }

  public updateGeneration(population: number) {
    const isColonyDead = population === 0
    const caption = isColonyDead
      ? 'your colony is dead'
      : this.game.getGeneration()
    this.update('generation', caption)
  }
}

export default GenerationCounter
