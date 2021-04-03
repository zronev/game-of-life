import Game from './core/game'
import { createGameOptions } from './core/utils'

const options = createGameOptions({
  canvas: {
    width: 800,
    height: 800,
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

game.init()
game.spawn(2000)

setInterval(() => {
  game.step()
}, 32)
