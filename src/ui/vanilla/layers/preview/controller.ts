import type { PreviewLayerView } from './view'
import type { PreviewLayerModel } from './model'

import { clear, drawPreview } from '../../../common/drawers'
import { shiftToBottomLeftCorner } from '../../../common/utility'

export class PreviewLayerController {
  constructor(
    private _layerModel: PreviewLayerModel,
    private _layerView: PreviewLayerView
  ) {
    this._layerView.createLayer(this._layerModel.state.options)
    this._subscribeToExternalModels()
    this._subscribeToViewEvents()
  }

  private _subscribeToViewEvents() {
    this._layerView.onMouseMove((layer, position) => {
      const { patternToSpawn } = this._layerModel.state

      clear(layer)
      drawPreview({
        pattern: patternToSpawn.get().grid,
        position: shiftToBottomLeftCorner(position, patternToSpawn.get().grid),
        layer,
      })
    })

    this._layerView.onMouseLeave(layer => {
      clear(layer)
    })
  }

  private _subscribeToExternalModels() {
    const { state } = this._layerModel

    state.options.eventsEmitter.addListener('FIELD_SIDES_CHANGED', options => {
      this._layerModel.changeFieldSize(options.fieldSides)
      this._layerView.createLayer(options)
      this._layerView.clear()
    })
  }
}
