import Game from '../../game'
import { Loop, LoopUtils } from '../../game/loop'
import makeButton, { ButtonProps } from './control-button'

const buildControls = (game: Game, loop: Loop): HTMLElement => {
  const buttonsProps: ButtonProps[] = [
    {
      text: 'spawn',
      onClick: () => game.spawners.randomSpawn(),
      className: 'button--success',
    },
    {
      text: 'clear',
      onClick: () => game.clearField(),
      className: 'button--danger',
    },
    {
      text: 'play',
      onClick: () => loop.start(() => game.step()),
    },
    {
      text: 'pause',
      onClick: () => loop.stop(),
    },
    {
      text: 'fps +',
      onClick: () => LoopUtils.changeFps(loop, 5),
    },
    {
      text: 'fps -',
      onClick: () => LoopUtils.changeFps(loop, -5),
    },
  ]

  const buttonsElements = buttonsProps.map(props => makeButton(props))

  const container = document.createElement('section')
  container.classList.add('controls', 'main__controls')
  container.append(...buttonsElements)

  return container
}

export default buildControls
