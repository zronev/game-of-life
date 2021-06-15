import React, { FC, MouseEvent, useContext, useEffect, useRef } from 'react'
import Layer from './Layer'
import useLayer from './useLayer'
import type { OptionsMap } from '../../../core/options'

import { clear } from '../../common/drawers'
import { PatternContext } from '../patterns/pattern-context'
import { drawPreviewOnMouseMove } from '../../common/layers/draw-preview'

type Props = {
  options: OptionsMap
}

const PreviewLayer: FC<Props> = ({ options }) => {
  const { ref, layer } = useLayer(options)
  const lastPosition = useRef<Point>({ x: -1, y: -1 })
  const [pattern] = useContext(PatternContext)

  useEffect(() => {
    if (!layer) return

    const { eventEmitter } = options
    eventEmitter.addListener('FIELD_SIDES_CHANGED', () => {
      clear(layer)
    })
  }, [layer])

  const handleMouseMove = (event: MouseEvent) => {
    drawPreviewOnMouseMove(event, layer, lastPosition.current, pattern)
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
