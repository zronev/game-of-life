import type { InfoView } from './view'
import type { InfoModel } from './model'

export class InfoController {
  constructor(infoModel: InfoModel, infoView: InfoView) {
    infoView.render(infoModel.state)
    infoModel.eventsEmitter.addListener('MODEL_CHANGED', infoView.prepareRender)
  }
}
