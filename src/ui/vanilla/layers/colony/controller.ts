import type { ColonyLayerModel } from './model'
import type { ColonyLayerView } from './view'

export class ColonyLayerController {
  constructor(layerModel: ColonyLayerModel, layerView: ColonyLayerView) {
    layerView.createLayer(layerModel.state.options)
    this._subscribeToExternalModels(layerModel, layerView)
  }

  private _subscribeToExternalModels(
    layerModel: ColonyLayerModel,
    layerView: ColonyLayerView
  ) {
    const { state, eventsEmitter } = layerModel

    state.options.eventsEmitter.addListener('FIELD_SIDES_CHANGED', options => {
      layerModel.changeFieldSize(options.fieldSides)
      layerView.createLayer(options)
    })

    eventsEmitter.addListener('MODEL_CHANGED', ({ grid }) =>
      layerView.draw(grid)
    )
  }
}
