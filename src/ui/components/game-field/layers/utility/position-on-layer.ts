import { Layer } from '../../../../drawers'
import { Point } from '../../../../../common/types'
import { positionOnElement } from './position-on-element'

export const positionOnLayer = (
  e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  layer: Layer
): Point => {
  const { canvas, cellSize } = layer
  const rect = canvas.getBoundingClientRect()
  const scale = canvas.width / rect.width

  return positionOnElement(e, canvas, cellSize, scale)
}
