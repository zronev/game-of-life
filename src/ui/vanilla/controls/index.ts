import type { Game } from '../../../core/game'
import type { Options } from '../../../core/options'
import { renderWrapper } from '../common/utility'
import { ControlsController } from './controller'
import { ControlsModel } from './model'
import { ControlsView } from './view'

export const renderControls = (
  game: Game,
  options: Options
): HTMLElement => {
  const controlsWrapper = renderWrapper('section', 'controls main__controls')

  const initialState = {
    game,
    options,
    fps: game.loop.fps,
    running: game.loop.running,
    fieldSides: options.fieldSides,
  }

  const model = new ControlsModel(initialState)
  const view = new ControlsView(controlsWrapper, model)
  new ControlsController(model, view)

  return controlsWrapper
}
