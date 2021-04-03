import Element from './element'

class Button extends Element {
  constructor(selectors: string) {
    super(selectors)
  }

  public onClick(fn: () => void) {
    this.domElement.addEventListener('click', fn)
  }
}

export default Button
