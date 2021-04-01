class Canvas {
  public static size: number
  private static instance: Canvas
  private static ctx: CanvasRenderingContext2D
  private static domElement: HTMLCanvasElement

  private constructor() {
    Canvas.size = 800
    this.createContext()
  }

  public static getInstance(): Canvas {
    if (!Canvas.instance) {
      Canvas.instance = new Canvas()
    }

    return Canvas.instance
  }

  public getContext(): CanvasRenderingContext2D {
    return Canvas.ctx
  }

  public getDOMElement(): HTMLCanvasElement {
    return Canvas.domElement
  }

  public setSize(width?: number, height?: number) {
    const canvasElement = this.getDOMElement()
    canvasElement.width = width || Canvas.size
    canvasElement.height = height || Canvas.size
  }

  private createContext() {
    const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
    const ctx = canvas.getContext('2d')!

    Canvas.ctx = ctx
    Canvas.domElement = canvas
  }
}

export default Canvas
