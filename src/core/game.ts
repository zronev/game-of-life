import Grid from './grid'
import Spawner from './spawner'
import Generation from './generation'

import Drawer from '../canvas/drawer'
import Canvas from '../canvas/canvas'

import { CanvasOptions, GameOptions } from './types'

class Game {
  private grid: Grid
  private drawer: Drawer
  private spawner: Spawner
  private generation: Generation
  private options: GameOptions

  constructor(options: GameOptions) {
    this.options = options

    this.grid = new Grid(options.grid)
    this.drawer = new Drawer(options)
    this.spawner = new Spawner(this.grid)
    this.generation = new Generation(this.grid)
  }

  public init() {
    this.setCanvasSize(this.options.canvas)
  }

  public spawn(amount?: number) {
    const GRID_OCCUPANCY_RATE = 0.25
    const defaultAmount = Math.floor(
      this.grid.getColumns() * this.grid.getColumns() * GRID_OCCUPANCY_RATE
    )

    this.spawner.spawnRandomCells(amount || defaultAmount)
    this.updateGrid()
  }

  public step() {
    this.generation.next()
    this.updateGrid()
  }

  public getGenerationCount() {
    return this.generation.getCount()
  }

  private setCanvasSize({ width, height }: CanvasOptions) {
    const canvas = Canvas.getInstance()
    canvas.setSize(width, height)
  }

  private updateGrid() {
    this.drawer.update(this.grid)
  }
}

export default Game
