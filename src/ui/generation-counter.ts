import Element from './element'

class GenerationCounter extends Element {
  constructor(selectors: string) {
    super(selectors)
  }

  public update(count: number) {
    this.domElement.textContent = String(count)
  }
}

export default GenerationCounter
