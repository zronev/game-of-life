import type { PreviewLayerView } from './view'
import type { PreviewLayerModel } from './model'
import { clear } from '../../../common/drawers'
import { PREVIEW_COLOR } from '../../../common/layers/constant'

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
    const { patternToSpawn } = this._layerModel.state
    this._layerView.onMouseMove(patternToSpawn)
    this._layerView.onMouseLeave(clear)
  }

  private _subscribeToExternalModels() {
    const { options } = this._layerModel.state

    options.eventsEmitter.addListener('FIELD_SIDES_CHANGED', options => {
      const previewOptions = { ...options, color: PREVIEW_COLOR }
      this._layerModel.changeFieldSize(options.fieldSides)
      this._layerView.createLayer(previewOptions)
      this._layerView.clear()
    })
  }
}
