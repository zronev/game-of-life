class Button {
  private domElement: HTMLElement

  constructor(selectors: string) {
    this.domElement = document.querySelector(selectors)!
  }

  public onClick(fn: () => void) {
    this.domElement.addEventListener('click', fn)
  }
}

export default Button
