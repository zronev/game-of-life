import { Loop } from './loop'
import Spawners from './spawners'

import Field from '../core/field'
import Generation from '../core/generation'

import { applyClassicRules } from '../core/rules'
import { Listener } from '../common/event'
import { Options } from './options'

class Game {
  private _loop: Loop
  private _field: Field
  private _spawners: Spawners
  private _generation: Generation

  constructor(options: Options) {
    this._field = new Field(options.grid)
    this._generation = new Generation(this._field, applyClassicRules)
    this._spawners = new Spawners(this._field)
    this._loop = new Loop(15, () => this.step())
  }

  public step(): void {
    this._generation.next()
  }

  public get loop(): Loop {
    return this._loop
  }

  public get spawners(): Spawners {
    return this._spawners
  }

  public clearField(): void {
    this._field.clear()
  }

  public subscribeOnGridChanged(listener: Listener<Field>): void {
    this._field.onGridChanged.addListener(listener)
  }

  public subscribeOnGenerationChanged(listener: Listener): void {
    this._generation.onGenerationChanged.addListener(listener)
  }
}

export default Game
