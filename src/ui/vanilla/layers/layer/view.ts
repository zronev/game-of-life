import type { LayerModel } from './model'
import type { LayerState } from './types'
import type { Layer } from '../../../common/layers'
import type { OptionsMap } from '../../../../core/options'

import { View } from '../../common/mvc/view'
import { createLayer } from '../../../common/layers/createLayer'

export class LayerView<
  State extends LayerState = LayerState
> extends View<State> {
  protected _layer: Nullable<Layer> = null
  protected _canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement, model: LayerModel<State>) {
    super(canvas, model)
    this._canvas = canvas
  }

  public createLayer(options: OptionsMap): void {
    this._layer = createLayer(this._canvas, options)
  }
}
