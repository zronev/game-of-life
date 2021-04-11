import Game from '../core/game'
import GenerationCounter from '../ui/generation-counter'
import PopulationCounter from '../ui/population-counter'

class Info {
  private generationCounter: GenerationCounter
  private populationCounter: PopulationCounter

  constructor(private game: Game) {
    this.generationCounter = new GenerationCounter(game)
    this.populationCounter = new PopulationCounter()
  }

  public updateCounters(options = { generation: true, population: true }) {
    const population = this.game.getPopulation()
    if (options.generation) this.generationCounter.updateGeneration(population)
    if (options.population) this.populationCounter.updatePopulation(population)
  }
}

export default Info
