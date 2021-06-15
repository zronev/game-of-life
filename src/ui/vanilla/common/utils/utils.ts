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

export const renderParagraph = (
  text: string,
  className: string
): HTMLParagraphElement => {
  const name = document.createElement('p')
  name.classList.add(...className.split(' '))
  name.textContent = text

  return name
}

export const renderWrapper = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className: string
): HTMLElementTagNameMap[K] => {
  const wrapper = document.createElement(tag)
  wrapper.classList.add(...className.split(' '))

  return wrapper
}

export const renderSection = (className: string): HTMLElement => {
  const wrapper = document.createElement('section')
  wrapper.classList.add('section', ...className.split(' '))

  return wrapper
}
