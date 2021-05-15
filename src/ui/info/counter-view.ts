import { Counter } from '../../game/counters'
import { EventTarget } from '../../common/event-source'

class CounterView implements EventTarget {
  private _element: HTMLElement

  constructor(private caption: string, defaultValue = 0) {
    this._element = document.createElement('p')
    this._element.textContent = this.getText(defaultValue)
  }

  get element() {
    return this._element
  }

  update(counter: Counter): void {
    this._element.textContent = this.getText(counter.count)
  }

  private getText(value: number) {
    return `${this.caption} ${value}`
  }
}

export default CounterView
