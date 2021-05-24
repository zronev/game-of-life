import Counter from './counter'

class View {
  private _container: HTMLElement
  private _populationCounter: Counter
  private _generationCounter: Counter

  constructor() {
    this._populationCounter = new Counter('population')
    this._generationCounter = new Counter('generation')
    this._container = this._buildContainer()
  }

  public createElement(): HTMLElement {
    return this._container
  }

  public updatePopulationCounter(count: number): void {
    this._populationCounter.count = count
  }

  public updateGenerationCounter(): void {
    this._generationCounter.count++
  }

  private _buildContainer(): HTMLElement {
    const container = document.createElement('section')
    container.classList.add('info', 'main__info')
    container.append(
      this._populationCounter.createElement(),
      this._generationCounter.createElement()
    )

    return container
  }
}

export default View
