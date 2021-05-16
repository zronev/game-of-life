import { clamp } from '../../common/utils'

class Loop {
  private _running: boolean = false
  private _requestId: number | null = null

  constructor(private _fps: number) {}

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
    this._running = true
  }

  public pause() {
    if (!this._requestId) return
    window.cancelAnimationFrame(this._requestId)
    this._requestId = null
    this._running = false
  }

  public set fps(value: number) {
    this._fps = clamp(value, 1, 60)
  }

  public get fps() {
    return this._fps
  }

  public get running() {
    return this._running
  }
}

export default Loop
