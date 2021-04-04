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
    this.grid = new Grid(options.grid)
    this.drawer = new Drawer(options)
    this.spawner = new Spawner(this.grid)
    this.generation = new Generation(this.grid)
    this.options = options
  }

  public init() {
    this.setCanvasSize(this.options.canvas)
  }

  public spawn(amount?: number) {
    const defaultAmount = this.getDefaultAmount()
    this.spawner.spawnRandomCells(amount || defaultAmount)
    this.updateGrid()
  }

  public step() {
    this.generation.next()
    this.updateGrid()
  }

  public getGenerationCount(): number {
    return this.generation.getCount()
  }

  private setCanvasSize({ width, height }: CanvasOptions) {
    const canvas = Canvas.getInstance()
    canvas.setSize(width, height)
  }

  private updateGrid() {
    this.drawer.update(this.grid)
  }

  private getDefaultAmount(): number {
    const GRID_OCCUPANCY_RATE = 0.25
    const rows = this.grid.getRows()
    const columns = this.grid.getColumns()
    return Math.floor(rows * columns * GRID_OCCUPANCY_RATE)
  }
}

export default Game
