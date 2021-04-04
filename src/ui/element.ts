abstract class UIElement<T extends Element> {
  protected domElement: T

  constructor(selectors: string) {
    this.domElement = document.querySelector(selectors)!
  }
}

export default UIElement
