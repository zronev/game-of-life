import { PreviewLayerView } from './view'
import { PreviewLayerModel } from './model'
import { PreviewLayerController } from './controller'

import type { Game } from '../../../../core/game'
import type { OptionsMap } from '../../../../core/options'
import type { PatternToSpawn } from '../../patterns/pattern-to-spawn'

export const renderPreviewLayer = (
  canvas: HTMLCanvasElement,
  game: Game,
  options: OptionsMap,
  patternToSpawn: PatternToSpawn
): HTMLCanvasElement => {
  const initialState = { options, patternToSpawn }
  const model = new PreviewLayerModel(game, initialState)
  const view = new PreviewLayerView(canvas, model)
  new PreviewLayerController(model, view)

  return canvas
}
