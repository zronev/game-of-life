import Grid from './grid/grid'
import Drawer from './drawer'
import Canvas from '../ui/canvas'
import Generation from './generation'
import GridService from './grid/grid-service'
import RandomSpawner from './spawner/random-spawner'
import PatternSpawner from './spawner/pattern-spawner'

import { Options } from './utility/options'
import { Point } from '../common/types'

class Game {
  private grid: Grid
  private drawer: Drawer
  private generation: Generation
  private gridService: GridService
  private randomSpawner: RandomSpawner
  private patternSpawner: PatternSpawner

  constructor(options: Options) {
    const canvas = new Canvas(options.canvas)

    this.grid = new Grid(options.grid)
    this.drawer = new Drawer(options, canvas)
    this.generation = new Generation(this.grid)
    this.gridService = new GridService(this.grid)
    this.randomSpawner = new RandomSpawner(this.grid)
    this.patternSpawner = new PatternSpawner(this.grid)
  }

  public step() {
    this.generation.next()
    this.updateGrid()
  }

  public randomSpawn(amount?: number) {
    const defaultAmount = this.gridService.getDefaultAmount()
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
    return this.gridService.getUsedCellsCount()
  }

  public clearGrid() {
    this.gridService.clearGrid()
    this.updateGrid()
  }

  private updateGrid() {
    this.drawer.update(this.grid)
  }
}

export default Game
