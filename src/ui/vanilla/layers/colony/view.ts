import type { ColonyLayerState } from './types'
import type { ColonyLayerModel } from './model'
import type { Grid } from '../../../../core/grid'
import type { Layer } from '../../../common/drawers'

import { LayerView } from '../layer/view'

export class ColonyLayerView extends LayerView<ColonyLayerState> {
  private _draw: (layer: Layer, grid: Grid) => void

  constructor(
    canvas: HTMLCanvasElement,
    model: ColonyLayerModel,
    draw: (layer: Layer, grid: Grid) => void
  ) {
    super(canvas, model)
    this._draw = draw
  }

  public draw(grid: Grid): void {
    if (this._layer) this._draw(this._layer, grid)
  }
}
