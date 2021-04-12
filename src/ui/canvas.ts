import UIElement from './element'
import { CanvasOptions } from '../core/utility/options'

class Canvas extends UIElement<HTMLCanvasElement> {
  private _ctx: CanvasRenderingContext2D

  constructor({
    parentSelectors,
    width,
    height,
    className = '',
  }: CanvasOptions) {
    super('canvas', parentSelectors, `canvas ${className}`)

    this._ctx = this.domElement.getContext('2d')!
    this.setCanvasSize(width, height)
  }

  public get ctx(): CanvasRenderingContext2D {
    return this._ctx
  }

  private setCanvasSize(width: number, height: number) {
    this._domElement.width = width
    this._domElement.height = height
  }
}

export default Canvas
