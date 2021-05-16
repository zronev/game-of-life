class CanvasView {
  private _element: HTMLCanvasElement
  private _ctx: CanvasRenderingContext2D

  constructor(width: number, height: number, className = '') {
    this._element = document.createElement('canvas')
    this._ctx = this._element.getContext('2d')!

    this._element.width = width
    this._element.height = height
    this._element.classList.add('canvas')
    if (className) this._element.classList.add(...className.split(' '))
  }

  public get ctx(): CanvasRenderingContext2D {
    return this._ctx
  }

  public get element(): HTMLCanvasElement {
    return this._element
  }
}

export default CanvasView
