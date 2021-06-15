import { Emitter } from '../../../../core/event-emitter'

type ModelEvents<S> = {
  MODEL_CHANGED: S
}

export class Model<State> {
  private _state: State
  private _eventEmitter: Emitter<ModelEvents<State>>

  constructor(initialState: State) {
    this._state = initialState
    this._eventEmitter = new Emitter()
  }

  public get state(): State {
    return this._state
  }

  public set state(state: State) {
    this._state = state
    this._eventEmitter.dispatch('MODEL_CHANGED', this.state)
  }

  public get eventEmitter(): Emitter<ModelEvents<State>> {
    return this._eventEmitter
  }
}
