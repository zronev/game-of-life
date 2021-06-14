import { Emitter } from '../../../core/event-emitter'
import type { Pattern } from '../../../patterns'

type Events = {
  PATTERN_CHANGED: Pattern
}

export class PatternToSpawn {
  private _eventsEmitter: Emitter<Events>

  constructor(private _pattern: Pattern) {
    this._eventsEmitter = new Emitter()
  }

  public get(): Pattern {
    return this._pattern
  }

  public set(pattern: Pattern): void {
    this._pattern = pattern
    this._eventsEmitter.dispatch('PATTERN_CHANGED', this._pattern)
  }

  public get eventsEmitter(): Emitter<Events> {
    return this._eventsEmitter
  }
}
