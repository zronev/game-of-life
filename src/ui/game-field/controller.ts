import View from './view'
import Model from './model'

class Controller {
  constructor(private _model: Model, private _view: View) {
    this._view.onAddPattern.addListener(position =>
      this._model.spawnPattern(_model.pattern, position)
    )

    this._view.onPatternPreviewShow.addListener(position =>
      this._view.drawPreviewLayer(_model.pattern, position)
    )

    this._model.subscribeOnGridChanged(field => {
      this._view.drawColonyLayer(field)
    })

    this._view.drawGridLayer()
  }

  public createElement(): HTMLElement {
    return this._view.createElement()
  }
}

export default Controller
