import type { OptionsMap } from '../../../core/options'
import type { ControlsState } from './types'

import { Model } from '../common/mvc/model'

export class ControlsModel extends Model<ControlsState> {
  constructor(initialState: ControlsState) {
    super(initialState)
    this._subscribeToExternalModel(initialState)
  }

  private _subscribeToExternalModel(initialState: ControlsState): void {
    const { game, options } = initialState

    const loopEmitter = game.getEmitter('loop')
    const optionsEmitter = options.eventEmitter

    const handleFps = (fps: number) => {
      this.state = { ...this.state, fps }
    }

    const handleRunning = (running: boolean) => {
      this.state = { ...this.state, running }
    }

    const handleSides = ({ fieldSides }: OptionsMap) => {
      this.state = { ...this.state, fieldSides }
    }

    loopEmitter.addListener('FPS_CHANGED', handleFps)
    loopEmitter.addListener('PLAYBACK_CHANGED', handleRunning)
    optionsEmitter.addListener('FIELD_SIDES_CHANGED', handleSides)
  }
}
