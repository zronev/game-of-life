import Grid from './core/grid'
import Generation from './core/generation'
import Canvas from './canvas/canvas'
import Drawer from './canvas/drawer'
import Spawner from './core/spawner'

const canvas = Canvas.getInstance()
canvas.setSize(800, 800)

const grid = new Grid(50, 50)
const generation = new Generation(grid)
const drawer = new Drawer()
const spawner = new Spawner(grid)

spawner.spawnRandomCells(600)
drawer.drawGrid(grid)

setInterval(() => {
  generation.nextGeneration()
  drawer.drawGrid(grid)
}, 120)
