import type { Game } from '../../../core/game'
import type { Options } from '../../../core/options'
import { renderSection } from '../common/utils'
import { ControlsModel } from './model'
import { ControlsView } from './view'
import { controlsController } from './controller'

export const renderControls = (game: Game, options: Options): HTMLElement => {
  const controlsWrapper = renderSection('controls main__controls')

  const initialState = {
    game,
    options,
    fps: game.loop.fps,
    running: game.loop.running,
    fieldSides: options.fieldSides,
  }

  const model = new ControlsModel(initialState)
  const view = new ControlsView(controlsWrapper, model)
  controlsController(model, view)

  return controlsWrapper
}
