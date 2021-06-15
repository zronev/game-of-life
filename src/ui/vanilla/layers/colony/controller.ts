import type { ColonyLayerModel } from './model'
import type { ColonyLayerView } from './view'

export class ColonyLayerController {
  constructor(layerModel: ColonyLayerModel, layerView: ColonyLayerView) {
    layerView.createLayer(layerModel.state.options)
    layerView.draw(layerModel.state.grid)
    this._subscribeToExternalModels(layerModel, layerView)
  }

  private _subscribeToExternalModels(
    layerModel: ColonyLayerModel,
    layerView: ColonyLayerView
  ) {
    const { state, eventEmitter } = layerModel

    state.options.eventEmitter.addListener('FIELD_SIDES_CHANGED', options => {
      layerModel.changeFieldSize(options.fieldSides)
      layerView.createLayer(options)
    })

    eventEmitter.addListener('MODEL_CHANGED', ({ grid }) =>
      layerView.draw(grid)
    )
  }
}
