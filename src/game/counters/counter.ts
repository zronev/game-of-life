import EventSource, { EventTarget } from '../../common/event-source'

abstract class Counter extends EventSource implements EventTarget {
  protected _count: number = 0

  get count(): number {
    return this._count
  }

  abstract update(source: EventSource): void
}

export default Counter
