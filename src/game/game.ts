import Field from '../core/field'
import Spawners from './spawners'
import Generation from '../core/generation'
import { applyClassicRules } from '../core/rules'

import { Options } from './options'
import { EventTarget } from '../common/event-source'

class Game {
  private _field: Field
  private _spawners: Spawners
  private _generation: Generation

  constructor(options: Options) {
    this._field = new Field(options.grid)
    this._generation = new Generation(this._field, applyClassicRules)
    this._spawners = new Spawners(this._field)
  }

  public step(): void {
    this._generation.next()
  }

  public get spawners(): Spawners {
    return this._spawners
  }

  public clearField(): void {
    this._field.clear()
  }

  public subscribeToField(target: EventTarget): void {
    this._field.subscribe(target)
  }

  public subscribeToGeneration(target: EventTarget): void {
    this._generation.subscribe(target)
  }
}

export default Game
