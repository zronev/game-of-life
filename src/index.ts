import Game from './core/game'
import Loop from './core/loop'

import Button from './ui/button'
import Counter from './ui/counter'

import options from './core/utility/options'
import patterns from './patterns/data'

const game = new Game(options)
game.randomSpawn()

const loop = new Loop(60)

const step = () => {
  const population = game.getPopulation()
  game.step()
  updateGeneration(population)
  populationCounter.update('population', population)
}

loop.start(step)

const generationCounter = new Counter('#info')
const populationCounter = new Counter('#info')

const updateGeneration = (population: number) => {
  const isColonyDead = population === 0
  const caption = isColonyDead ? 'your colony is dead' : game.getGeneration()
  generationCounter.update('generation', caption)
}

const spawnButton = new Button('#controls')
spawnButton.setTextContent('spawn')
spawnButton.onClick(() => {
  game.randomSpawn()
  populationCounter.update('population', game.getPopulation())
})

const clearButton = new Button('#controls')
clearButton.setTextContent('clear')
clearButton.onClick(() => {
  game.clearGrid()
  populationCounter.update('population', game.getPopulation())
})

const playButton = new Button('#controls')
playButton.setTextContent('play')
playButton.onClick(() => loop.start(step))

const pauseButton = new Button('#controls')
pauseButton.setTextContent('pause')
pauseButton.onClick(() => loop.stop())

Object.entries(patterns).forEach(([key, pattern]) => {
  const patternSpawnButton = new Button('#patterns')

  patternSpawnButton.setTextContent(key)
  patternSpawnButton.onClick(() => {
    game.patternSpawn(pattern, { x: 50, y: 50 })
    populationCounter.update('population', game.getPopulation())
  })
})
