
class View {
  private _element: HTMLElement

  constructor(private _caption: string, defaultValue = 0) {
    this._element = document.createElement('p')
    this._element.classList.add('counter')
    // this._element.textContent = this._getText(defaultValue)
  }

  // get element(): HTMLElement {
  //   return this._element
  // }

  // update(counter: Counter): void {
  //   this._element.textContent = this._getText(counter.count)
  // }

  // private _getText(value: number) {
  //   return `${this._caption}: ${value}`
  // }
}

export default View
