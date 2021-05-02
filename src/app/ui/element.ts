abstract class UIElement<T extends HTMLElement> {
  protected _domElement: T

  constructor(
    tagName: keyof HTMLElementTagNameMap,
    parentSelectors?: string,
    className?: string
  ) {
    this._domElement = this.createDOMElement(tagName)
    this.appendDOMElement(parentSelectors)
    this.addClassName(className)
  }

  public setTextContent(textContent: string) {
    this.domElement.textContent = textContent
  }

  public get domElement(): T {
    return this._domElement
  }

  private createDOMElement(tagName: string): T {
    return document.createElement(tagName)! as T
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
    if (!className) return
    const classes = className.split(' ').filter(Boolean)
    this.domElement.classList.add(...classes)
  }
}

export default UIElement
