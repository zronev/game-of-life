import { clamp } from '../../common/utils'

class Loop {
  private _minFps = 1
  private _maxFps = 60
  private _running = false
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

  public get running() {
    return this._running
  }

  public get minFps() {
    return this._minFps
  }

  public get maxFps() {
    return this._maxFps
  }

  public set fps(value: number) {
    this._fps = clamp(value, this.minFps, this.maxFps)
  }

  public get fps() {
    return this._fps
  }

  public changeFpsBy(value: number) {
    this.fps = this.fps + value
  }
}

export default Loop
