import { Counter } from '../../game/counters'
import { EventTarget } from '../../common/event-source'

class CounterView implements EventTarget {
  private _element: HTMLElement

  constructor(private _caption: string, defaultValue = 0) {
    this._element = document.createElement('p')
    this._element.textContent = this._getText(defaultValue)
  }

  get element(): HTMLElement {
    return this._element
  }

  update(counter: Counter): void {
    this._element.textContent = this._getText(counter.count)
  }

  private _getText(value: number) {
    return `${this._caption} ${value}`
  }
}

export default CounterView
