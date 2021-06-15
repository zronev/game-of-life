import type { PreviewLayerView } from './view'
import type { PreviewLayerModel } from './model'
import { clear } from '../../../common/drawers'
import { PREVIEW_COLOR } from '../../../common/layers/constant'

const subscribeToExternalModels = (
  model: PreviewLayerModel,
  view: PreviewLayerView
) => {
  const { options } = model.state

  options.eventEmitter.addListener('FIELD_SIDES_CHANGED', options => {
    const previewOptions = { ...options, color: PREVIEW_COLOR }
    model.changeFieldSize(options.fieldSides)
    view.createLayer(previewOptions)
    view.clear()
  })
}

const subscribeToViewEvents = (
  model: PreviewLayerModel,
  view: PreviewLayerView
) => {
  const { patternToSpawn } = model.state
  view.onMouseMove(patternToSpawn)
  view.onMouseLeave(clear)
}

export const previewLayerController = (
  model: PreviewLayerModel,
  view: PreviewLayerView
): void => {
  view.createLayer(model.state.options)
  subscribeToExternalModels(model, view)
  subscribeToViewEvents(model, view)
}
