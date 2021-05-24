import Game from '../../game'
import Controller from './controller'
import Model from './model'
import View from './view'

export const buildInfo = (game: Game): HTMLElement => {
  const model = new Model(game)
  const view = new View()
  const controller = new Controller(model, view)

  return controller.createElement()
}
