import View from './view'
import Model from './model'
import Controller from './controller'
import Game, { Options } from '../../game'

export const buildGameField = (game: Game, options: Options): HTMLElement => {
  const model = new Model(game)
  const view = new View(options)
  const controller = new Controller(model, view)

  return controller.createElement()
}
