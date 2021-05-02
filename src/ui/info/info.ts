import Game from '../../game'
import GenerationCounter from '../../components/generation-counter'
import PopulationCounter from '../../components/population-counter'

class Info {
  private generationCounter: GenerationCounter
  private populationCounter: PopulationCounter

  constructor(game: Game) {
    this.generationCounter = new GenerationCounter(game)
    this.populationCounter = new PopulationCounter(game)
    this.updateAllCounters()
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
