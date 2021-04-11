import Counter from './counter'

class PopulationCounter extends Counter {
  constructor() {
    super('#info')
  }

  public updatePopulation(population: number) {
    this.update('population', population)
  }
}

export default PopulationCounter
