import Grid from '../core/grid'
import Drawer from './drawer'
import ClassicRules from '../core/rules'
import Generation from '../core/generation'
import * as GridService from '../core/grid'
import { RandomSpawner, PatternSpawner } from '../core/spawner'

import { Options } from './options'
import { Point } from '../common/types'

class Game {
  private grid: Grid
  private drawer: Drawer
  private generation: Generation
  private randomSpawner: RandomSpawner
  private patternSpawner: PatternSpawner

  constructor(options: Options) {
    this.grid = new Grid(options.grid)
    this.drawer = new Drawer(options)
    this.generation = new Generation(this.grid, new ClassicRules())
    this.randomSpawner = new RandomSpawner(this.grid)
    this.patternSpawner = new PatternSpawner(this.grid)
  }

  public step() {
    this.generation.next()
    this.updateGrid()
  }

  public randomSpawn(amount?: number) {
    const defaultAmount = GridService.getDefaultAmount(this.grid)
    this.randomSpawner.spawn(amount || defaultAmount)
    this.updateGrid()
  }

  public patternSpawn(pattern: boolean[][], offset?: Point) {
    this.patternSpawner.spawn(pattern, offset)
    this.updateGrid()
  }

  public getGeneration(): number {
    return this.generation.count
  }

  public getPopulation(): number {
    return GridService.getUsedCellsCount(this.grid)
  }

  public clearGrid() {
    this.grid.grid = GridService.clearGrid(this.grid)
    this.updateGrid()
  }

  private updateGrid() {
    this.drawer.update(this.grid)
  }
}

export default Game
