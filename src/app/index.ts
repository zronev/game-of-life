import Game, { createOptions } from '../game'
import { Loop } from '../game/loop'
import createControls from '../ui/controls'

const options = createOptions({
  canvas: {
    parentSelectors: '#game',
    width: 600,
    height: 600,
  },
  grid: {
    rows: 100,
    columns: 100,
  },
  cell: {
    color: '#2d3436',
  },
})

const game = new Game(options)
const loop = new Loop(60)

const step = () => {
  game.step()
}

game.spawners.randomSpawn()
loop.start(step)

createControls(game, loop, step)
