import Grid from './grid'
import Drawer from '../canvas/drawer'
import Spawner from './spawner'
import Generation from './generation'

class Game {
  private grid: Grid
  private drawer: Drawer
  private spawner: Spawner
  private generation: Generation

  constructor() {
    this.grid = new Grid(50, 50)
    this.drawer = new Drawer()
    this.spawner = new Spawner(this.grid)
    this.generation = new Generation(this.grid)
  }

  public spawn(amount = 600) {
    this.spawner.spawnRandomCells(amount)
    this.drawGrid()
  }

  public step() {
    this.generation.nextGeneration()
    this.drawGrid()
  }

  private drawGrid() {
    this.drawer.drawGrid(this.grid)
  }
}

export default Game
