import type { Size } from '../../../../core/options'

export const renderCanvas = (
  size: Size,
  className: string
): HTMLCanvasElement => {
  const canvas = document.createElement('canvas')
  canvas.width = size.width
  canvas.height = size.height
  canvas.classList.add('canvas', ...className.split(' '))

  return canvas
}
