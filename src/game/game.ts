import Stats from './stats'
import Spawners from './spawners'
import { CanvasDrawer } from './drawer'

import ClassicRules from '../core/rules'
import Generation from '../core/generation'
import Grid, * as GridService from '../core/grid'

import { Options } from './options'

class Game {
  public stats: Stats
  public spawners: Spawners

  private _gridInstance: Grid
  private _drawer: CanvasDrawer
  private _generation: Generation

  constructor(options: Options) {
    this._drawer = new CanvasDrawer(options)
    this._gridInstance = new Grid(options.grid)
    this._generation = new Generation(this._gridInstance, new ClassicRules())

    this._gridInstance.subscribe(this._drawer)

    this.stats = new Stats(this._generation, this._gridInstance)
    this.spawners = new Spawners(this._gridInstance)
  }

  public step() {
    this._generation.next()
  }

  public clearGrid() {
    this._gridInstance.grid = GridService.clearGrid(this._gridInstance)
  }
}

export default Game
