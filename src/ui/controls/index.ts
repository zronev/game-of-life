import Game from '../../game'
import Info from '../info/info'
import Button from '../../components/button'
import { Loop, LoopUtils } from '../../game/loop'

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
    game.clearField()
    info.updateAllCounters()
  })

  const playButton = new Button('#controls')
  playButton.setTextContent('play')
  playButton.onClick(() => loop.start(loopStep))

  const pauseButton = new Button('#controls')
  pauseButton.setTextContent('pause')
  pauseButton.onClick(() => loop.stop())

  const fpsIncButton = new Button('#controls')
  fpsIncButton.setTextContent('inc fps')
  fpsIncButton.onClick(() => LoopUtils.changeFps(loop, 5))

  const fpsDecButton = new Button('#controls')
  fpsDecButton.setTextContent('dec fps')
  fpsDecButton.onClick(() => LoopUtils.changeFps(loop, -5))
}

export default createControls
