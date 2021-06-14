import { View } from '../common/mvc'
import { renderWrapper } from '../common/utility'
import { FIELD_SIDES } from '../../../core/options'
import type { ControlsState } from './types'

export class ControlsView extends View<ControlsState> {
  public override render(state: ControlsState): DocumentFragment {
    const fragment = document.createDocumentFragment()

    const fieldRow = this._renderFieldRow()
    const loopRow = this._renderLoopRow(state)
    const sidesRow = this._renderSidesRow(state)

    fragment.append(fieldRow, loopRow, sidesRow)
    return fragment
  }

  public onClick(callback: (eventName: string) => void): void {
    this._targetElement.addEventListener('click', event => {
      if (!(event.target instanceof HTMLButtonElement)) return
      const name = event.target.dataset.name
      if (name) callback(name)
    })
  }

  private _renderFieldRow(): HTMLElement {
    const row = this._renderRow()

    const spawnButton = this._renderButton({ text: 'spawn' })
    const clearButton = this._renderButton({ text: 'clear' })

    row.append(spawnButton, clearButton)
    return row
  }

  private _renderLoopRow({ fps, running, game }: ControlsState): HTMLElement {
    const row = this._renderRow()

    const isMinFpsReached = fps === game.loop.minFps
    const slowerButton = this._renderButton({
      text: 'slower',
      disabled: isMinFpsReached,
    })

    const playbackButton = this._renderButton({
      text: running ? 'pause' : 'play',
      eventName: 'playback',
    })

    const isMaxFpsReached = fps === game.loop.maxFps
    const fasterButton = this._renderButton({
      text: 'faster',
      disabled: isMaxFpsReached,
    })

    row.append(slowerButton, playbackButton, fasterButton)
    return row
  }

  private _renderSidesRow({ fieldSides }: ControlsState): HTMLElement {
    const row = this._renderRow()

    const buttons = Object.entries(FIELD_SIDES).map(([name, sides]) => {
      const isActive = fieldSides.rows === sides
      return this._renderButton({ text: name, disabled: isActive })
    })

    row.append(...buttons)
    return row
  }

  private _renderRow(): HTMLElement {
    return renderWrapper('div', 'row')
  }

  private _renderButton({
    text,
    eventName = text,
    disabled = false,
  }: {
    text: string
    eventName?: string
    disabled?: boolean
  }): HTMLButtonElement {
    const button = document.createElement('button')
    button.classList.add('button')
    button.dataset.name = eventName
    button.disabled = disabled
    button.textContent = text
    button.type = 'button'

    return button
  }
}
