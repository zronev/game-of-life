import Game from './core/game'
import Loop from './core/loop'
import Info from './info/info'

import options from './core/utility/options'
import createPatterns from './patterns'
import createControls from './controls'

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
