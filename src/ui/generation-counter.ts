import UIElement from './element'

class GenerationCounter extends UIElement<HTMLElement> {
  constructor(selectors: string) {
    super(selectors)
  }

  public update(count: number) {
    this.domElement.textContent = String(count)
  }
}

export default GenerationCounter
