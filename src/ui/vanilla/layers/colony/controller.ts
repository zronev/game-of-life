import type { ColonyLayerModel } from './model'
import type { ColonyLayerView } from './view'

const subscribeToExternalModels = (
  model: ColonyLayerModel,
  view: ColonyLayerView
) => {
  const { state, eventEmitter } = model
  const { options } = state

  options.eventEmitter.addListener('FIELD_SIDES_CHANGED', options => {
    model.changeFieldSize(options.fieldSides)
    view.createLayer(options)
  })

  eventEmitter.addListener('MODEL_CHANGED', ({ grid }) => {
    view.draw(grid)
  })
}

export const colonyLayerController = (
  model: ColonyLayerModel,
  view: ColonyLayerView
): void => {
  view.createLayer(model.state.options)
  view.draw(model.state.grid)
  subscribeToExternalModels(model, view)
}
