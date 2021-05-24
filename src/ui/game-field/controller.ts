import View from './view'
import Model from './model'

class Controller {
  constructor(private _model: Model, private _view: View) {
    this._view.onMouseClick.addListener(position =>
      this._model.spawnPattern(_model.pattern, position)
    )

    this._view.onMouseOver.addListener(position => {
      this._view.previewLayer.drawer.clear()
      this._view.previewLayer.drawer.draw(_model.pattern, position)
    })

    this._view.onMouseLeave.addListener(() => {
      this._view.previewLayer.drawer.clear()
    })

    this._model.subscribeOnGridChanged(field => {
      this._view.colonyLayer.drawer.clear()
      this._view.colonyLayer.drawer.draw(field)
    })

    this._view.gridLayer.drawer.draw()
  }

  public createElement(): HTMLElement {
    return this._view.createElement()
  }
}

export default Controller
