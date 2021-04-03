import Game from './core/game'
import Loop from './core/loop'
import GenerationCounter from './ui/generation-counter'
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
const generationCounter = new GenerationCounter('#generation-count')

game.init()
game.spawn()

const loop = new Loop(32)
loop.start(() => {
  game.step()
  generationCounter.update(game.getGenerationCount())
})

const spawnButton: HTMLButtonElement = document.querySelector('#spawn-button')!

const onSpawnClick = () => {
  game.spawn()
}

spawnButton.addEventListener('click', onSpawnClick)
