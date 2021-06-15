import type { OptionsMap } from '../../../core/options'
import { setFillColor } from '../drawers'
import type { Layer } from './types'

export const createLayer = (
  canvas: HTMLCanvasElement,
  options: OptionsMap
): Layer => {
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Error occurs while getting the 2d context')
  }

  const { cellSize, color } = options
  const layer = { canvas, context, cellSize }

  setFillColor(context, color)

  return layer
}
