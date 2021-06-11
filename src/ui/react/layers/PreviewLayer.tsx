import React, { FC, useContext, useEffect } from 'react'
import Layer from './Layer'
import useLayer from './useLayer'
import { makeLayerHandler, shiftToBottomLeftCorner } from './utility'

import type { OptionsMap } from '../../../core/options'
import { drawPreview, clear } from '../../common/drawers'
import { PatternContext } from '../patterns/pattern-context'

type Props = {
  options: OptionsMap
}

const PreviewLayer: FC<Props> = ({ options }) => {
  const [pattern] = useContext(PatternContext)
  const { ref, layer } = useLayer(options)

  useEffect(() => {
    if (!layer) return

    const { eventsEmitter } = options
    eventsEmitter.addListener('FIELD_SIDES_CHANGED', () => {
      clear(layer)
    })
  }, [layer])

  const layerHandler = makeLayerHandler(layer)

  const handleMouseMove = layerHandler((position, layer) => {
    const bottomLeftCorner = shiftToBottomLeftCorner(position, pattern.grid)
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
