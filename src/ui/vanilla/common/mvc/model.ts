import { Emitter } from '../../../../core/event-emitter'

type ModelEvents<S> = {
  MODEL_CHANGED: S
}

export class Model<State> {
  private _state: State
  private _eventsEmitter: Emitter<ModelEvents<State>>

  constructor(initialState: State) {
    this._state = initialState
    this._eventsEmitter = new Emitter()
  }

  public get state(): State {
    return this._state
  }

  public set state(state: State) {
    this._state = state
    this._eventsEmitter.dispatch('MODEL_CHANGED', this.state)
  }

  public get eventsEmitter(): Emitter<ModelEvents<State>> {
    return this._eventsEmitter
  }
}
