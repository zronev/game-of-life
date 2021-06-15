import type { GridLayerModel } from './model'
import type { GridLayerView } from './view'

const subscribeToExternalModels = (
  model: GridLayerModel,
  view: GridLayerView
) => {
  const { options } = model.state

  options.eventEmitter.addListener('FIELD_SIDES_CHANGED', options => {
    model.changeFieldSize(options.fieldSides)
    view.createLayer(options)
    view.draw(options)
  })
}

export const gridLayerController = (
  model: GridLayerModel,
  view: GridLayerView
): void => {
  view.createLayer(model.state.options)
  view.draw(model.state.options)
  subscribeToExternalModels(model, view)
}
