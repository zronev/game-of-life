import Game from './core/game'
import Loop from './core/loop'

import Button from './ui/button'
import GenerationCounter from './ui/generation-counter'

import options from './core/utility/options'
import patterns from './patterns/data'

const game = new Game(options)
game.randomSpawn()

const loopStep = () => {
  game.step()
  generationCounter.update(game.getGenerationCount())
}

const loop = new Loop(30)
loop.start(loopStep)

const generationCounter = new GenerationCounter('#generation')

const spawnButton = new Button('#controls')
spawnButton.setTextContent('spawn')
spawnButton.onClick(() => game.randomSpawn())

const clearButton = new Button('#controls')
clearButton.setTextContent('clear')
clearButton.onClick(() => game.clearGrid())

const playButton = new Button('#controls')
playButton.setTextContent('play')
playButton.onClick(() => loop.start(loopStep))

const pauseButton = new Button('#controls')
pauseButton.setTextContent('pause')
pauseButton.onClick(() => loop.stop())

Object.entries(patterns).forEach(([key, pattern]) => {
  const patternSpawnButton = new Button('#patterns')
  patternSpawnButton.setTextContent(key)
  patternSpawnButton.onClick(() => game.patternSpawn(pattern, { x: 50, y: 50 }))
})
