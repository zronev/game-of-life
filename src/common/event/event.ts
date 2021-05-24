export type Listener<T = unknown> = (params: T) => void

export class Event<T = unknown> {
  private _listeners: Set<Listener<T>> = new Set()

  public addListener(listener: Listener<T>): void {
    this._listeners.add(listener)
  }

  public trigger(params: T): void {
    this._listeners.forEach(listener => {
      listener(params)
    })
  }
}
