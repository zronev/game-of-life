import Game from '../../game'
import { Loop } from '../../game/loop'
import makeButton from './button-view'

export const buildControls = (game: Game, loop: Loop): HTMLElement => {
  const spawn = makeButton({
    text: 'spawn',
    className: 'button--success',
    onClick: () => game.spawners.randomSpawn(),
  })

  const clear = makeButton({
    text: 'clear',
    className: 'button--danger',
    onClick: () => game.clearField(),
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
      if (loop.fps === loop.maxFps) {
        button.disabled = true
        return
      }

      button.disabled = false
      loop.changeFpsBy(5)
    },
  })

  const fpsDec = makeButton({
    text: 'fps -',
    onClick: button => {
      if (loop.fps === loop.minFps) {
        button.disabled = true
        return
      }

      button.disabled = false
      loop.changeFpsBy(-5)
    },
  })

  const container = document.createElement('section')
  container.classList.add('controls', 'main__controls')
  container.append(spawn, clear, playback, fpsInc, fpsDec)

  return container
}
