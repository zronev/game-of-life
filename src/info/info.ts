import Game from '../core/game'
import GenerationCounter from '../ui/generation-counter'
import PopulationCounter from '../ui/population-counter'

class Info {
  private generationCounter: GenerationCounter
  private populationCounter: PopulationCounter

  constructor(game: Game) {
    this.generationCounter = new GenerationCounter(game)
    this.populationCounter = new PopulationCounter(game)
  }

  public updateAllCounters() {
    this.updateGenerationCounter()
    this.updatePopulationCounter()
  }

  public updateGenerationCounter() {
    this.generationCounter.updateGeneration()
  }

  public updatePopulationCounter() {
    this.populationCounter.updatePopulation()
  }
}

export default Info
