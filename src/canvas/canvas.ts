class Canvas {
  private _ctx: CanvasRenderingContext2D
  private _domElement: HTMLCanvasElement

  private constructor(selector: string) {
    const canvas = document.querySelector<HTMLCanvasElement>(selector)!
    const ctx = canvas.getContext('2d')!

    this._ctx = ctx
    this._domElement = canvas
  }

  public get ctx(): CanvasRenderingContext2D {
    return this._ctx
  }

  public get domElement(): HTMLCanvasElement {
    return this._domElement
  }
}

export default Canvas
