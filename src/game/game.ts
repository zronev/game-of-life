import Spawners from './spawners'
import { CanvasDrawer } from './drawer'

import Generation from '../core/generation'
import Population from '../core/population'
import Field, * as FieldUtils from '../core/field'

import { Options } from './options'
import { applyClassicRules } from '../core/rules'

class Game {
  public spawners: Spawners

  private _field: Field
  private _drawer: CanvasDrawer
  private _generation: Generation
  private _population: Population

  constructor(options: Options) {
    this._drawer = new CanvasDrawer(options)
    this._field = new Field(options.grid)
    this._field.subscribe(this._drawer)
    this._generation = new Generation(this._field, applyClassicRules)
    this._population = new Population(this._field)

    this.spawners = new Spawners(this._field)
  }

  public get generation(): number {
    return this._generation.count
  }

  public get population(): number {
    return this._population.count
  }

  public isColonyDead(): boolean {
    return this._population.isColonyDead()
  }

  public step() {
    if (!this.isColonyDead()) this._generation.next()
  }

  public clearField() {
    this._field.grid = FieldUtils.getEmptyGrid(this._field)
  }
}

export default Game
