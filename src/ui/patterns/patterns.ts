import Model from './model'
import View from './view'
import Controller from './controller'
import Game from '../../game'

export const buildPatterns = (game: Game): HTMLElement => {
  const model = new Model(game)
  const view = new View()
  const controller = new Controller(model, view)

  return controller.createElement()
}
