import { FieldSide, FIELD_SIDES } from '../../../core/options'
import { View } from '../common/mvc/view'
import { renderWrapper } from '../common/utility'
import type { ControlsState } from './types'

export class ControlsView extends View<ControlsState> {
  public override render(state: ControlsState): DocumentFragment {
    const fragment = document.createDocumentFragment()

    const fieldRow = this._renderFieldRow(state)
    const loopRow = this._renderLoopRow(state)
    const sidesRow = this._renderSidesRow(state)

    fragment.append(fieldRow, loopRow, sidesRow)
    return fragment
  }

  private _renderFieldRow({game}: ControlsState): HTMLElement {
    const row = this._renderRow()

    const handleSpawn = () => game.spawners.randomSpawn()
    const spawnButton = this._renderButton('spawn', handleSpawn)

    const handleClear = () => game.clearField()
    const clearButton = this._renderButton('clear', handleClear)

    row.append(spawnButton, clearButton)
    return row
  }

  private _renderLoopRow({ fps, running, game }: ControlsState): HTMLElement {
    const row = this._renderRow()

    const handleSlower = () => game.loop.changeFpsBy(-5)
    const isSlowerActive = fps === game.loop.minFps
    const slowerButton = this._renderButton('slower', handleSlower, isSlowerActive)

    const handlePlayback = () => game.loop.toggle()
    const playbackButton = this._renderButton(
      running ? 'pause' : 'play',
      handlePlayback
    )

    const handleFaster = () => game.loop.changeFpsBy(5)
    const isFasterActive = fps === game.loop.maxFps
    const fasterButton = this._renderButton('faster', handleFaster, isFasterActive)

    row.append(slowerButton, playbackButton, fasterButton)
    return row
  }

  private _renderSidesRow({ fieldSides, options }: ControlsState): HTMLElement {
    const row = this._renderRow()

    const buttons = Object.entries(FIELD_SIDES).map(([name, sides]) => {
      const isActive = fieldSides.rows === sides
      const handleSides = () =>
        options.changeFieldSides(name as FieldSide)

      return this._renderButton(name, handleSides, isActive)
    })

    row.append(...buttons)
    return row
  }

  private _renderRow(): HTMLElement {
    return renderWrapper('div', 'row')
  }

  private _renderButton(
    text: string,
    onClick: (e: MouseEvent) => void,
    disabled = false
  ): HTMLButtonElement {
    const button = document.createElement('button')
    button.classList.add('button')
    button.disabled = disabled
    button.textContent = text
    button.onclick = onClick
    button.type = 'button'

    return button
  }
}
