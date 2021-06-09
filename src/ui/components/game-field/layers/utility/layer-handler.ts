import type { MouseEventHandler } from 'react'
import type { Layer } from '../../../../drawers'
import { positionOnLayer } from './position-on-layer'

type Callback = (position: Point, layer: Layer) => void
type Handler = (callback: Callback) => MouseEventHandler<HTMLCanvasElement>
type HandlerWithLayer = (layer: Layer | null) => Handler

const layerHandler: HandlerWithLayer = layer => callback => e => {
  if (layer) callback(positionOnLayer(e, layer), layer)
}

export const makeLayerHandler = (layer: Layer | null): Handler =>
  layerHandler(layer)
