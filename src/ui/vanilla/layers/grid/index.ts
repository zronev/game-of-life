import { GridLayerView } from './view'
import { GridLayerModel } from './model'
import { GridLayerController } from './controller'

import type { Game } from '../../../../core/game'
import type { OptionsMap } from '../../../../core/options'

export const renderGridLayer = (
  canvas: HTMLCanvasElement,
  game: Game,
  options: OptionsMap
): HTMLCanvasElement => {
  const model = new GridLayerModel(game, { options })
  const view = new GridLayerView(canvas, model)
  new GridLayerController(model, view)

  return canvas
}
