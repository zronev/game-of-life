import Game from '../../game'
import { Loop, LoopUtils } from '../../game/loop'
import makeButton from './button-view'

export const buildControls = (game: Game, loop: Loop): HTMLElement => {
  const spawn = makeButton({
    text: 'spawn',
    onClick: () => game.spawners.randomSpawn(),
    className: 'button--success',
  })

  const clear = makeButton({
    text: 'clear',
    onClick: () => game.clearField(),
    className: 'button--danger',
  })

  const playback = makeButton({
    text: loop.running ? 'pause' : 'play',
    onClick: button => {
      if (loop.running) {
        loop.pause()
        button.textContent = 'play'
      } else {
        loop.start(() => game.step())
        button.textContent = 'pause'
      }
    },
  })

  const fpsInc = makeButton({
    text: 'fps +',
    onClick: button => {
      if (loop.fps === 60) {
        button.disabled = true
        return
      }

      button.disabled = false
      LoopUtils.changeFps(loop, 5)
    },
  })

  const fpsDec = makeButton({
    text: 'fps -',
    onClick: button => {
      if (loop.fps === 1) {
        button.disabled = true
        return
      }

      button.disabled = false
      LoopUtils.changeFps(loop, -5)
    },
  })

  const container = document.createElement('section')
  container.classList.add('controls', 'main__controls')
  container.append(spawn, clear, playback, fpsInc, fpsDec)

  return container
}
