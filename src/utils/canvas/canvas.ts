class Canvas {
  private static ctx: CanvasRenderingContext2D
  private static instance: Canvas

  private constructor() {}

  public static getInstance(): Canvas {
    if (!Canvas.instance) {
      Canvas.instance = new Canvas()
    }

    return Canvas.instance
  }

  public getContext(): CanvasRenderingContext2D {
    return Canvas.ctx
  }

  public createContext() {
    const canvas = document.querySelector<HTMLCanvasElement>('#canvas')
    const ctx = canvas.getContext('2d')

    Canvas.ctx = ctx
  }
}

export default Canvas
