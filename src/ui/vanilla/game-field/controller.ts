import type { GameFieldView } from './view'
import type { GameFieldModel } from './model'
import { positionOnElement, shiftToBottomLeftCorner } from '../../common/utils'

const spawn = (
  event: MouseEvent,
  element: HTMLElement,
  model: GameFieldModel
): void => {
  const { game, options, patternToSpawn } = model.state
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

const subscribeToViewEvents = (model: GameFieldModel, view: GameFieldView) => {
  view.onClick((event, element) => {
    spawn(event, element, model)
  })

  view.onMouseMove((event, element) => {
    if (view.isDrawing) spawn(event, element, model)
  })
}

export const gameFieldController = (
  model: GameFieldModel,
  view: GameFieldView
): void => {
  view.render(model.state)
  subscribeToViewEvents(model, view)
}
