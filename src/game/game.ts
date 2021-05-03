import Stats from './stats'
import Spawners from './spawners'
import { CanvasDrawer } from './drawer'

import Generation from '../core/generation'
import Field, * as FieldUtils from '../core/field'

import { Options } from './options'
import { applyClassicRules } from '../core/rules'

class Game {
  public stats: Stats
  public spawners: Spawners

  private _field: Field
  private _drawer: CanvasDrawer
  private _generation: Generation

  constructor(options: Options) {
    this._drawer = new CanvasDrawer(options)
    this._field = new Field(options.grid)
    this._field.subscribe(this._drawer)
    this._generation = new Generation(this._field, applyClassicRules)

    this.stats = new Stats(this._generation, this._field)
    this.spawners = new Spawners(this._field)
  }

  public step() {
    this._generation.next()
  }

  public clearField() {
    const { rows, columns } = this._field
    this._field.grid = FieldUtils.getEmptyGrid(rows, columns)
  }
}

export default Game
