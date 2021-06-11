import type { MouseEventHandler } from 'react'
import type { Layer } from '../../../common/drawers'
import { positionOnElement } from './position-on-element'

type Callback = (position: Point, layer: Layer) => void
type Handler = (callback: Callback) => MouseEventHandler<HTMLCanvasElement>
type HandlerWithLayer = (layer: Layer | null) => Handler

const layerHandler: HandlerWithLayer = layer => callback => event => {
  if (!layer) return

  const { canvas, cellSize } = layer

  callback(
    positionOnElement({
      event,
      targetElementWidth: canvas.width,
      element: canvas,
      cellSize,
    }),
    layer
  )
}

export const makeLayerHandler = (layer: Layer | null): Handler =>
  layerHandler(layer)
