class Element {
  protected domElement: HTMLElement

  constructor(selectors: string) {
    this.domElement = document.querySelector(selectors)!
  }
}

export default Element
