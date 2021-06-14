import type { Game } from '../../../../core/game'
import type { Layer } from '../../../common/layers'
import type { OptionsMap } from '../../../../core/options'

import { ColonyLayerView } from './view'
import { ColonyLayerModel } from './model'
import { ColonyLayerController } from './controller'
import { Grid, GridFromOptions } from '../../../../core/grid'

export const renderColonyLayer = (
  canvas: HTMLCanvasElement,
  game: Game,
  options: OptionsMap,
  draw: (layer: Layer, grid: Grid) => void,
  onGridChanged?: (callback: (grid: Grid) => void) => void
): HTMLCanvasElement => {
  const initialState = {
    options,
    grid: new GridFromOptions(options.fieldSides),
  }

  const model = new ColonyLayerModel(game, initialState, onGridChanged)
  const view = new ColonyLayerView(canvas, model, draw)
  new ColonyLayerController(model, view)

  return canvas
}
