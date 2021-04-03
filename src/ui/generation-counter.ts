class GenerationCounter {
  private domElement: HTMLElement

  constructor(selectors: string) {
    this.domElement = document.querySelector(selectors)!
  }

  public update(count: number) {
    this.domElement.textContent = String(count)
  }
}

export default GenerationCounter
