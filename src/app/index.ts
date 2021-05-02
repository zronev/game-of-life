import Game, { Loop, createOptions } from '../game'
import Info from './info/info'

import createPatterns from './patterns'
import createControls from './controls'

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
const info = new Info(game)
const loop = new Loop(60)

const step = () => {
  game.step()
  info.updateAllCounters()
}

game.randomSpawn()
loop.start(step)

createControls(game, info, loop, step)
createPatterns(game, info)
