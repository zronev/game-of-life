import React, { FC, MouseEvent, useContext, useEffect, useRef } from 'react'
import Layer from './Layer'
import useLayer from './useLayer'

import {
  isEqualPoints,
  positionOnElement,
  shiftToBottomLeftCorner,
} from '../../common/utility'
import { PatternContext } from '../patterns/pattern-context'
import { drawPreview, clear } from '../../common/drawers'

import type { OptionsMap } from '../../../core/options'

type Props = {
  options: OptionsMap
}

const PreviewLayer: FC<Props> = ({ options }) => {
  const { ref, layer } = useLayer(options)
  const lastPosition = useRef<Point>({ x: -1, y: -1 })
  const [pattern] = useContext(PatternContext)

  useEffect(() => {
    if (!layer) return

    const { eventsEmitter } = options
    eventsEmitter.addListener('FIELD_SIDES_CHANGED', () => {
      clear(layer)
    })
  }, [layer])

  const handleMouseMove = (event: MouseEvent) => {
    if (!layer) return

    const { canvas, cellSize } = layer
    const { grid } = pattern

    const position = positionOnElement({
      event,
      cellSize,
      element: canvas,
      targetElementWidth: canvas.width,
    })

    if (isEqualPoints(lastPosition.current, position)) return
    lastPosition.current = position

    clear(layer)
    drawPreview({
      pattern: grid,
      position: shiftToBottomLeftCorner(position, grid),
      layer,
    })
  }

  const handleMouseLeave = () => {
    if (layer) clear(layer)
  }

  return (
    <Layer
      ref={ref}
      size={options.canvasSize}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="preview-canvas"
    />
  )
}

export default PreviewLayer
