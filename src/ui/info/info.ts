import Game from '../../game'
import View from './view'

export const buildInfo = (game: Game): HTMLElement => {
  const container = document.createElement('section')
  container.classList.add('info', 'main__info')

  return container
}
