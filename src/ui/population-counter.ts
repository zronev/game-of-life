import Game from '../core/game'
import Counter from './counter'

class PopulationCounter extends Counter {
  constructor(private game: Game) {
    super('#info')
  }

  public updatePopulation() {
    const population = this.game.getPopulation()
    const isColonyDead = population === 0

    this.update('population', isColonyDead ? 'your colony is dead' : population)
  }
}

export default PopulationCounter
