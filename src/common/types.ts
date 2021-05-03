export type Point = {
  x: number
  y: number
}

export interface EventTarget {
  update(source: EventSource): void
}

export interface EventSource {
  subscribe(target: EventTarget): void
  unsubscribe(target: EventTarget): void
  notify(): void
}
