import Field from '../core/field'
import Generation from '../core/generation'
import { applyClassicRules } from '../core/rules'

import Spawners from './spawners'
import { ColonyDrawer, GridDrawer } from './drawer'

import { Options } from './options'
import { EventTarget } from '../common/event-source'

class Game {
  private _field: Field
  private _spawners: Spawners
  private _generation: Generation
  private _gridDrawer: GridDrawer
  private _colonyDrawer: ColonyDrawer

  constructor(options: Options) {
    // TODO: Move to view logic
    this._gridDrawer = new GridDrawer(options)
    this._colonyDrawer = new ColonyDrawer(options)

    this._field = new Field(options.grid)
    this._generation = new Generation(this._field, applyClassicRules)

    this._spawners = new Spawners(this._field)

    this._subscribeDependencies()
    this._gridDrawer.draw()
  }

  public step() {
    this._generation.next()
  }

  public get spawners() {
    return this._spawners
  }

  public clearField() {
    this._field.clear()
  }

  public subscribeToField(target: EventTarget) {
    this._field.subscribe(target)
  }

  public subscribeToGeneration(target: EventTarget) {
    this._generation.subscribe(target)
  }

  private _subscribeDependencies() {
    this.subscribeToField(this._colonyDrawer)
  }
}

export default Game
