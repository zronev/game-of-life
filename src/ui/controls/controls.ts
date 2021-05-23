import Game from '../../game'
import makeButton from './button-view'

export const buildControls = (game: Game): HTMLElement => {
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
    text: game.loop.running ? 'pause' : 'play',
    onClick: button => {
      if (game.loop.running) {
        game.loop.pause()
        button.textContent = 'play'
      } else {
        game.loop.start()
        button.textContent = 'pause'
      }
    },
  })

  const fpsInc = makeButton({
    text: 'speed +',
    onClick: button => {
      if (game.loop.fps === game.loop.maxFps) {
        button.disabled = true
        return
      }

      button.disabled = false
      game.loop.changeFpsBy(5)
    },
  })

  const fpsDec = makeButton({
    text: 'speed -',
    onClick: button => {
      if (game.loop.fps === game.loop.minFps) {
        button.disabled = true
        return
      }

      button.disabled = false
      game.loop.changeFpsBy(-5)
    },
  })

  const container = document.createElement('section')
  container.classList.add('controls', 'main__controls')
  container.append(spawn, clear, playback, fpsInc, fpsDec)

  return container
}
