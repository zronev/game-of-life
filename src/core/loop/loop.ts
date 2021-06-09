import { Emitter } from '../event-emitter'
import { clamp } from '../utils'

export type LoopEventMap = {
  FPS_CHANGED: number
  PLAYBACK_CHANGED: boolean
}

export class Loop {
  private _minFps = 1
  private _maxFps = 60
  private _running = false
  private _requestId: number | null = null
  private _eventEmitter: Emitter<LoopEventMap>

  constructor(private _fps: number, private _step: () => void) {
    this._eventEmitter = new Emitter()
  }

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
    this._setRunning(true)
  }

  public pause(): void {
    if (!this._requestId) return

    window.cancelAnimationFrame(this._requestId)

    this._requestId = null
    this._setRunning(false)
  }

  public get eventEmitter(): Emitter<LoopEventMap> {
    return this._eventEmitter
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

  public get fps(): number {
    return this._fps
  }

  public set fps(value: number) {
    this._fps = clamp(value, this.minFps, this.maxFps)
    this._eventEmitter.dispatch('FPS_CHANGED', this._fps)
  }

  public changeFpsBy(value: number): void {
    this.fps = this.fps + value
  }

  private _setRunning(value: boolean) {
    this._running = value
    this._eventEmitter.dispatch('PLAYBACK_CHANGED', this._running)
  }
}
