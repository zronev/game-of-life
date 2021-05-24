import { FieldUtils } from '../../core/field'
import Model from './model'
import View from './view'

class Controller {
  constructor(private _model: Model, private _view: View) {
    this._model.subscribeOnGridChanged(field => {
      const count = FieldUtils.getUsedCells(field)
      this._view.updatePopulationCounter(count)
    })

    this._model.subscribeOnGenerationChanged(() => {
      this._view.updateGenerationCounter()
    })
  }

  public createElement(): HTMLElement {
    return this._view.createElement()
  }
}

export default Controller
