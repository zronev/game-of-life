import Game from '../game'
import Counter from './counter'

class PopulationCounter extends Counter {
  constructor(private game: Game) {
    super('#info')
  }

  public updatePopulation() {
    const count = this.game.isColonyDead()
      ? 'your colony is dead'
      : this.game.population

    this.update('population', count)
  }
}

export default PopulationCounter
