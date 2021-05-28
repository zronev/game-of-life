import Model from './model'
import View from './view'

class Controller {
  constructor(private _model: Model, private _view: View) {}

  public createElement(): HTMLElement {
    return this._view.createElement()
  }
}

export default Controller
