import Game from './core/game'
import Loop from './core/loop'
import Canvas from './canvas/canvas'

import Button from './ui/button'
import GenerationCounter from './ui/generation-counter'

import options from './core/utility/options'
import patterns from './patterns/data'

import { downloadScreenshot } from './controls/utils'

const game = new Game(options)
game.randomSpawn()

const loopStep = () => {
  game.step()
  generationCounter.update(game.getGenerationCount())
}

const loop = new Loop(2)
loop.start(loopStep)

const generationCounter = new GenerationCounter('#generation-count')

const screenshotButton = new Button('#screenshot-button')
screenshotButton.onClick(() => {
  const canvas = Canvas.getInstance()
  const canvasDomElement = canvas.getDOMElement()
  downloadScreenshot(canvasDomElement, {
    fileName: 'game_of_life',
    imageType: 'image/png',
    quality: 1.0,
  })
})

const spawnButton = new Button('#spawn-button')
spawnButton.onClick(() => game.randomSpawn())

const pauseButton = new Button('#pause-button')
pauseButton.onClick(() => loop.stop())

const playButton = new Button('#play-button')
playButton.onClick(() => loop.start(loopStep))

const patternSpawnButton = new Button('#pattern-spawn-button')
patternSpawnButton.onClick(() => game.patternSpawn(patterns.toad))
