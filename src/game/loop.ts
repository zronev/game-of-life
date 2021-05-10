class Loop {
  private fps: number
  private requestId: number | null = null

  constructor(fps: number) {
    this.fps = fps
  }

  public start(fn: () => void) {
    if (this.requestId) return

    let lastFrameTimeMs = 0

    const gameLoop = (timestamp: number) => {
      if (timestamp < lastFrameTimeMs + 1000 / this.fps) {
        this.requestId = window.requestAnimationFrame(gameLoop)
        return
      }

      lastFrameTimeMs = timestamp

      fn()
      this.requestId = window.requestAnimationFrame(gameLoop)
    }

    this.requestId = window.requestAnimationFrame(gameLoop)
  }

  public stop() {
    if (!this.requestId) return
    window.cancelAnimationFrame(this.requestId)
    this.requestId = null
  }
}

export default Loop
