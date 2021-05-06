export interface EventTarget {
  update(source: EventSource): void
}

abstract class EventSource {
  private _eventTargets: EventTarget[] = []

  public subscribe(target: EventTarget): void {
    const isExist = this._eventTargets.includes(target)

    if (isExist) return

    this._eventTargets.push(target)
  }

  public unsubscribe(target: EventTarget): void {
    this._eventTargets = this._eventTargets.filter(t => t !== target)
  }

  public notify(): void {
    for (const target of this._eventTargets) {
      target.update(this)
    }
  }
}

export default EventSource
