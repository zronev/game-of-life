type EventMap = Record<string, unknown>
type EventKey<T extends EventMap> = string & keyof T
type EventListener<T> = (params: T) => void

export class Emitter<T extends EventMap> {
  private _events: Map<EventKey<T>, Set<EventListener<T[any]>>> = new Map()

  public addListener<K extends EventKey<T>>(
    eventName: K,
    listener: EventListener<T[K]>
  ): void {
    const listenersByEventName = this._events.get(eventName)

    if (!listenersByEventName) {
      this._events.set(eventName, new Set([listener]))
      return
    }

    if (listenersByEventName.has(listener)) {
      return
    }

    this._events.set(eventName, listenersByEventName.add(listener))
  }

  public removeListener<K extends EventKey<T>>(
    eventName: K,
    listener: EventListener<T[K]>
  ): void {
    this._events.get(eventName)?.delete(listener)
  }

  public dispatch<K extends EventKey<T>>(eventName: K, params: T[K]): void {
    const listeners = this._events.get(eventName)
    listeners?.forEach(listener => {
      listener(params)
    })
  }
}
