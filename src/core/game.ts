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

  public spawn(amount = 600) {
    this.spawner.spawnRandomCells(amount)
    this.updateGrid()
  }

  public step() {
    this.generation.nextGeneration()
    this.updateGrid()
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
