import Game, { Loop } from '../../game'
import Info from '../info/info'
import Button from '../../components/button'

const createControls = (
  game: Game,
  info: Info,
  loop: Loop,
  loopStep: () => void
) => {
  const spawnButton = new Button('#controls', 'button--success')
  spawnButton.setTextContent('spawn')
  spawnButton.onClick(() => {
    game.spawners.randomSpawn()
    info.updateAllCounters()
  })

  const clearButton = new Button('#controls', 'button--danger')
  clearButton.setTextContent('clear')
  clearButton.onClick(() => {
    game.clearGrid()
    info.updateAllCounters()
  })

  const playButton = new Button('#controls')
  playButton.setTextContent('play')
  playButton.onClick(() => loop.start(loopStep))

  const pauseButton = new Button('#controls')
  pauseButton.setTextContent('pause')
  pauseButton.onClick(() => loop.stop())
}

export default createControls
