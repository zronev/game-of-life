import UIElement from './element'

class GenerationCounter extends UIElement<HTMLSpanElement> {
  constructor(parentSelectors?: string, className?: string) {
    super('span', parentSelectors, className)
  }

  public update(count: number) {
    this.domElement.textContent = `generation: ${String(count)}`
  }
}

export default GenerationCounter
