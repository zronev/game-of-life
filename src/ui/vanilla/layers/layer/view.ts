import type { LayerModel } from './model'
import type { LayerState } from './types'
import type { OptionsMap } from '../../../../core/options'

import { View } from '../../common/mvc/view'
import { Layer, setFillColor } from '../../../common/drawers'

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
    const context = this._canvas.getContext('2d')

    if (!context) {
      throw new Error('Error occurs while getting the 2d context')
    }

    const { cellSize, color } = options
    this._layer = { canvas: this._canvas, context, cellSize }

    setFillColor(context, color)
  }
}
