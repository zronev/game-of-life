abstract class UIElement<T extends HTMLElement> {
  protected domElement: T

  constructor(
    tagName: keyof HTMLElementTagNameMap,
    parentSelectors?: string,
    className?: string
  ) {
    this.domElement = this.getDOMElement(tagName)
    this.appendDOMElement(parentSelectors)
    this.addClassName(className)
  }

  public setTextContent(textContent: string) {
    this.domElement.textContent = textContent
  }

  private getDOMElement(tagName: string): T {
    const domElement = document.createElement(tagName)!
    return domElement as T
  }

  private appendDOMElement(parentSelectors?: string) {
    if (!parentSelectors) {
      document.body.appendChild(this.domElement)
      return
    }

    const parentElement = document.querySelector(parentSelectors)

    parentElement
      ? parentElement.appendChild(this.domElement)
      : document.body.appendChild(this.domElement)
  }

  private addClassName(className?: string) {
    if (className) this.domElement.classList.add(className)
  }
}

export default UIElement
