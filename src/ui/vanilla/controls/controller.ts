import type { ControlsView } from './view'
import type { ControlsModel } from './model'

export class ControlsController {
  constructor(controlsModel: ControlsModel, controlsView: ControlsView) {
    controlsView.render(controlsModel.state)
    controlsModel.eventsEmitter.addListener('MODEL_CHANGED', controlsView.prepareRender)
  }
}
