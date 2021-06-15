import type { Model } from './model'

export abstract class View<State> {
  constructor(
    protected _targetElement: HTMLElement,
    private _model: Model<State>
  ) {
    this.prepareRender = this.prepareRender.bind(this)
    this.prepareRender()
  }

  public render(state: State): Nullable<DocumentFragment> {
    return null
  }

  public destroy(): void {
    this._targetElement.innerHTML = ''
    this._unsubscribe()
  }

  public prepareRender(): void {
    const { state } = this._model
    const render = this.render(state)

    if (render) {
      this._targetElement.innerHTML = ''
      this._targetElement.appendChild(render)
    }
  }

  private _unsubscribe(): void {
    const { eventEmitter } = this._model
    eventEmitter.removeListener('MODEL_CHANGED', this.prepareRender)
  }
}