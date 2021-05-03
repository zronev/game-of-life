import Stats from './stats'
import { CanvasDrawer } from './drawer'

import ClassicRules from '../core/rules'
import Generation from '../core/generation'
import Grid from '../core/grid'
import * as GridService from '../core/grid'
import { RandomSpawner, PatternSpawner } from '../core/spawner'

import { Options } from './options'
import { Point } from '../common/types'

class Game {
  public stats: Stats

  private _gridInstance: Grid
  private _drawer: CanvasDrawer
  private _generation: Generation
  private _randomSpawner: RandomSpawner
  private _patternSpawner: PatternSpawner

  constructor(options: Options) {
    this._gridInstance = new Grid(options.grid)
    this._drawer = new CanvasDrawer(options)
    this._gridInstance.subscribe(this._drawer)

    this._generation = new Generation(this._gridInstance, new ClassicRules())
    this._randomSpawner = new RandomSpawner(this._gridInstance)
    this._patternSpawner = new PatternSpawner(this._gridInstance)

    this.stats = new Stats(this._generation, this._gridInstance)
  }

  public step() {
    this._generation.next()
  }

  public randomSpawn(amount?: number) {
    const defaultAmount = GridService.getDefaultAmount(this._gridInstance)
    this._randomSpawner.spawn(amount || defaultAmount)
  }

  public patternSpawn(pattern: boolean[][], offset?: Point) {
    this._patternSpawner.spawn(pattern, offset)
  }

  public clearGrid() {
    this._gridInstance.grid = GridService.clearGrid(this._gridInstance)
  }
}

export default Game
