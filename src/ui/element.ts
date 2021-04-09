abstract class UIElement<T extends Element> {
  protected domElement: T

  constructor(selectors: string) {
    this.domElement = document.querySelector(selectors)!
  }

  public setTextContent(textContent: string) {
    this.domElement.textContent = textContent
  }
}

export default UIElement
