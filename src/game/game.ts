import Field from '../core/field'
import Generation from '../core/generation'
import { applyClassicRules } from '../core/rules'

import Spawners from './spawners'
import { ColonyDrawer, GridDrawer } from './drawer'
import { PopulationCounter, GenerationCounter, Counter } from './counters'

import { Options } from './options'
import { EventTarget } from '../common/event-source'

class Game {
  public spawners: Spawners

  private _field: Field
  private _generation: Generation
  private _counters: Record<string, Counter>
  private _gridDrawer: GridDrawer
  private _colonyDrawer: ColonyDrawer

  constructor(options: Options) {
    // TODO: Move to view logic
    this._gridDrawer = new GridDrawer(options)
    this._colonyDrawer = new ColonyDrawer(options)

    this._field = new Field(options.grid)
    this._generation = new Generation(this._field, applyClassicRules)

    this._counters = {
      population: new PopulationCounter(),
      generation: new GenerationCounter(),
    }

    // TODO: Move to view logic -- public method `setFieldGrid`
    this.spawners = new Spawners(this._field)

    this._subscribeDependencies()
    this._gridDrawer.draw()
  }

  public step() {
    if (!this._isColonyDead()) this._generation.next()
  }

  public get counters() {
    return this._counters
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
    this.subscribeToField(this._counters.population)
    this.subscribeToGeneration(this._counters.generation)
  }

  private _isColonyDead(): boolean {
    return this._counters.population.count === 0
  }
}

export default Game
