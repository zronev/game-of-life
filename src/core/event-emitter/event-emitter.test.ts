import { Emitter } from './event-emitter'

type EventsMap = {
  FIELD_CHANGED: number
}

class WithEventEmitter {
  private _emitter: Emitter<EventsMap>

  constructor(private _value: number) {
    this._emitter = new Emitter()
  }

  public get emitter(): Emitter<EventsMap> {
    return this._emitter
  }

  public get value(): number {
    return this._value
  }

  public set value(value: number) {
    this._value = value
    this._emitter.dispatch('FIELD_CHANGED', this._value)
  }
}

let callback: jest.Mock<any>
let classWithEventEmitter: WithEventEmitter

beforeEach(() => {
  classWithEventEmitter = new WithEventEmitter(1)
  callback = jest.fn()
})

describe('when a value dispatch event on changing', () => {
  it('should call a listener', () => {
    classWithEventEmitter.emitter.addListener('FIELD_CHANGED', callback)

    classWithEventEmitter.value = 2
    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith(2)

    classWithEventEmitter.value = 12
    expect(callback).toBeCalledTimes(2)
    expect(callback).toHaveBeenLastCalledWith(12)
  })

  it("shouldn't call a listener after unsubscription", () => {
    classWithEventEmitter.emitter.addListener('FIELD_CHANGED', callback)

    classWithEventEmitter.value = 2
    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith(2)

    classWithEventEmitter.emitter.removeListener('FIELD_CHANGED', callback)

    classWithEventEmitter.value = 12
    expect(callback).toBeCalledTimes(1)
    expect(callback).toHaveBeenLastCalledWith(2)
  })
})
