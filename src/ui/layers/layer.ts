import { Drawer } from '../drawers/types'
import CanvasView from '../game-field/canvas'

class Layer {
  constructor(private _canvas: CanvasView, private _drawer: Drawer) {}

  public get canvas(): CanvasView {
    return this._canvas
  }

  public get drawer(): Drawer {
    return this._drawer
  }

  public get cellSize(): number {
    return this._drawer.cellSize
  }

  public get width(): number {
    return this._canvas.element.width
  }

  public get height(): number {
    return this._canvas.element.height
  }

  public get canvasElement(): HTMLCanvasElement {
    return this._canvas.element
  }

  public get canvasContext(): CanvasRenderingContext2D {
    return this._canvas.ctx
  }
}

export default Layer
