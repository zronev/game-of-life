import Game from './core/game'
import Loop from './core/loop'
import Canvas from './canvas/canvas'

import Button from './ui/button'
import GenerationCounter from './ui/generation-counter'

import options from './core/options'

const game = new Game(options)
game.init()
game.spawn()

const loopStep = () => {
  game.step()
  generationCounter.update(game.getGenerationCount())
}

const loop = new Loop(120)
loop.start(loopStep)

const generationCounter = new GenerationCounter('#generation-count')

const screenshotButton = new Button('#screenshot-button')
screenshotButton.onClick(() => {
  const canvas = Canvas.getInstance().getDOMElement()
  const dataURL = canvas.toDataURL('image/png', 1.0)
  const link = document.createElement('a')

  link.setAttribute('download', 'game_of_life')
  link.href = dataURL
  document.body.appendChild(link)
  link.click()
  link.remove()
})

const spawnButton = new Button('#spawn-button')
spawnButton.onClick(() => game.spawn())

const pauseButton = new Button('#pause-button')
pauseButton.onClick(() => loop.stop())

const buttonButton = new Button('#play-button')
buttonButton.onClick(() => loop.start(loopStep))
