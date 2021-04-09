import UIElement from './element'

class Counter extends UIElement<HTMLDivElement> {
  constructor(parentSelectors?: string, className?: string) {
    super('div', parentSelectors, className)
  }

  public update(caption: string, count: string | number) {
    this.domElement.textContent = `${caption}: ${count}`
  }
}

export default Counter
