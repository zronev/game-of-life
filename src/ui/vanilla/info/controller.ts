import type { InfoView } from './view'
import type { InfoModel } from './model'

export const infoController = (model: InfoModel, view: InfoView): void => {
  view.render(model.state)
  model.eventEmitter.addListener('MODEL_CHANGED', view.prepareRender)
}
