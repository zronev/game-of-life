import UIElement from './element'

class Button extends UIElement<HTMLButtonElement> {
  constructor(selectors: string) {
    super(selectors)
  }

  public onClick(fn: () => void) {
    this.domElement.addEventListener('click', fn)
  }

  public disable() {
    this.domElement.disabled = true
  }

  public enable() {
    this.domElement.disabled = false
  }
}

export default Button
