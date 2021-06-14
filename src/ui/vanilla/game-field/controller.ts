import type { GameFieldModel } from './model'
import type { GameFieldView } from './view'
import { positionOnElement, shiftToBottomLeftCorner } from '../../react/layers'

export class GameFieldController {
  constructor(private _model: GameFieldModel, private _view: GameFieldView) {
    this._spawn = this._spawn.bind(this)

    this._view.render(this._model.state)
    this._subscribeToViewEvents()
  }

  private _subscribeToViewEvents() {
    this._view.onClick(this._spawn)
    this._view.onMouseMove((event, element) => {
      if (this._view.isDrawing) this._spawn(event, element)
    })
  }

  private _spawn(event: MouseEvent, element: HTMLElement) {
    const { game, options, patternToSpawn } = this._model.state
    const { cellSize, canvasSize } = options

    const position = positionOnElement({
      event,
      element,
      cellSize,
      targetElementWidth: canvasSize.width,
    })

    const patternGrid = patternToSpawn.get().grid
    const bottomLeftCorner = shiftToBottomLeftCorner(position, patternGrid)

    game.spawners.patternSpawn(patternGrid, bottomLeftCorner)
  }
}
