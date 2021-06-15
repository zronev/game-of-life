import type { GridLayerModel } from './model'
import type { GridLayerView } from './view'

export class GridLayerController {
  constructor(layerModel: GridLayerModel, layerView: GridLayerView) {
    layerView.createLayer(layerModel.state.options)
    this._subscribeToExternalModels(layerModel, layerView)
  }

  private _subscribeToExternalModels(
    layerModel: GridLayerModel,
    layerView: GridLayerView
  ) {
    const { state } = layerModel

    layerView.draw(state.options)

    state.options.eventEmitter.addListener('FIELD_SIDES_CHANGED', options => {
      layerModel.changeFieldSize(options.fieldSides)
      layerView.createLayer(options)
      layerView.draw(options)
    })
  }
}
