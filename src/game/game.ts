import Stats from './stats'
import Spawners from './spawners'
import { CanvasDrawer } from './drawer'

import ClassicRules from '../core/rules'
import Generation from '../core/generation'
import Field, * as FieldService from '../core/field'

import { Options } from './options'

class Game {
  public stats: Stats
  public spawners: Spawners

  private _field: Field
  private _drawer: CanvasDrawer
  private _generation: Generation

  constructor(options: Options) {
    this._drawer = new CanvasDrawer(options)
    this._field = new Field(options.grid)
    this._generation = new Generation(this._field, new ClassicRules())

    this._field.subscribe(this._drawer)

    this.stats = new Stats(this._generation, this._field)
    this.spawners = new Spawners(this._field)
  }

  public step() {
    this._generation.next()
  }

  public clearField() {
    this._field.grid = FieldService.getEmptyGrid(this._field)
  }
}

export default Game
