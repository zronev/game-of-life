import Game from './core/game'
import Loop from './core/loop'

import Info from './info/info'
import Button from './ui/button'

import options from './core/utility/options'
import createPatterns from './patterns'

const game = new Game(options)
game.randomSpawn()

const loop = new Loop(60)

const step = () => {
  game.step()
  info.updateCounters()
}

loop.start(step)

const info = new Info(game)

const spawnButton = new Button('#controls', 'button--success')
spawnButton.setTextContent('spawn')
spawnButton.onClick(() => {
  game.randomSpawn()
  info.updateCounters()
})

const clearButton = new Button('#controls', 'button--danger')
clearButton.setTextContent('clear')
clearButton.onClick(() => {
  game.clearGrid()
  info.updateCounters()
})

const playButton = new Button('#controls')
playButton.setTextContent('play')
playButton.onClick(() => loop.start(step))

const pauseButton = new Button('#controls')
pauseButton.setTextContent('pause')
pauseButton.onClick(() => loop.stop())

createPatterns(game, info)
