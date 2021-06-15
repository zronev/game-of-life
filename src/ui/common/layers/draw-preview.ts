import type { Layer } from './types'
import type { Pattern } from '../../../patterns'

import {
  isEqualPoints,
  positionOnElement,
  shiftToBottomLeftCorner,
} from '../utils'
import { clear, drawPreview } from '../drawers'

export const drawPreviewOnMouseMove = (
  event: { clientX: number; clientY: number },
  layer: Nullable<Layer>,
  lastPosition: Point,
  pattern: Pattern
): void => {
  if (!layer) return

  const { canvas, cellSize } = layer
  const { grid } = pattern

  const position = positionOnElement({
    event,
    cellSize: cellSize,
    element: canvas,
    targetElementWidth: canvas.width,
  })

  if (isEqualPoints(lastPosition, position)) return
  lastPosition = position

  clear(layer)
  drawPreview({
    pattern: grid,
    position: shiftToBottomLeftCorner(position, grid),
    layer,
  })
}
