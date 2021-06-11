import React, { FC, useContext, useEffect, useRef } from 'react'
import Layer from './Layer'
import useLayer from './useLayer'
import { makeLayerHandler, shiftToBottomLeftCorner } from './utility'

import type { OptionsMap } from '../../../core/options'
import { drawPreview, clear } from '../../common/drawers'
import { PatternContext } from '../patterns/pattern-context'
import { isEqualPoints } from './utility/is-equal-points'

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

  const layerHandler = makeLayerHandler(layer)

  const handleMouseMove = layerHandler((position, layer) => {
    if (isEqualPoints(lastPosition.current, position)) return

    lastPosition.current = position

    clear(layer)
    drawPreview({
      pattern: pattern.grid,
      position: shiftToBottomLeftCorner(position, pattern.grid),
      layer,
    })
  })

  const handleMouseLeave = layerHandler((_, layer) => {
    clear(layer)
  })

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
