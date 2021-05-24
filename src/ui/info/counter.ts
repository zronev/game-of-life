class Counter {
  private _count: number
  private _element: HTMLElement

  constructor(private _caption: string, defaultCount = 0) {
    this._count = defaultCount
    this._element = this._buildCounter()
  }

  public get count(): number {
    return this._count
  }

  public set count(newCount: number) {
    this._count = newCount
    this._setCounterText()
  }

  public createElement(): HTMLElement {
    return this._element
  }

  private _buildCounter(): HTMLElement {
    const counter = document.createElement('p')
    counter.classList.add('counter')
    counter.textContent = this._getCounterText()

    return counter
  }

  private _setCounterText(): void {
    this._element.textContent = this._getCounterText()
  }

  private _getCounterText(): string {
    return `${this._caption}: ${this._count}`
  }
}

export default Counter
