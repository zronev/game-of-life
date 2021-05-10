import { clamp } from '../../common/utils'

class Loop {
  private _fps: number
  private _requestId: number | null = null

  constructor(fps: number) {
    this._fps = fps
  }

  public start(fn: () => void) {
    if (this._requestId) return

    let lastFrameTimeMs = 0

    const gameLoop = (timestamp: number) => {
      if (timestamp < lastFrameTimeMs + 1000 / this._fps) {
        this._requestId = window.requestAnimationFrame(gameLoop)
        return
      }

      lastFrameTimeMs = timestamp

      fn()
      this._requestId = window.requestAnimationFrame(gameLoop)
    }

    this._requestId = window.requestAnimationFrame(gameLoop)
  }

  public stop() {
    if (!this._requestId) return
    window.cancelAnimationFrame(this._requestId)
    this._requestId = null
  }

  public set fps(value: number) {
    this._fps = clamp(value, 1, 60)
  }

  public get fps() {
    return this._fps
  }
}

export default Loop
