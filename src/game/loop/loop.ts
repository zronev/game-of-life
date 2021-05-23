import { clamp } from '../../common/utils'

class Loop {
  private _minFps = 1
  private _maxFps = 60
  private _running = false
  private _requestId: number | null = null

  constructor(private _fps: number, private _step: () => void) {}

  public start(): void {
    if (this._requestId) return

    let lastFrameTimeMs = 0

    const gameLoop = (timestamp: number) => {
      if (timestamp < lastFrameTimeMs + 1000 / this._fps) {
        this._requestId = window.requestAnimationFrame(gameLoop)
        return
      }

      lastFrameTimeMs = timestamp

      this._step()
      this._requestId = window.requestAnimationFrame(gameLoop)
    }

    this._requestId = window.requestAnimationFrame(gameLoop)
    this._running = true
  }

  public pause(): void {
    if (!this._requestId) return
    window.cancelAnimationFrame(this._requestId)
    this._requestId = null
    this._running = false
  }

  public toggle(): void {
    this.running ? this.pause() : this.start()
  }

  public get running(): boolean {
    return this._running
  }

  public get minFps(): number {
    return this._minFps
  }

  public get maxFps(): number {
    return this._maxFps
  }

  public set fps(value: number) {
    this._fps = clamp(value, this.minFps, this.maxFps)
  }

  public get fps(): number {
    return this._fps
  }

  public changeFpsBy(value: number): void {
    this.fps = this.fps + value
  }
}

export default Loop
