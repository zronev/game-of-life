import React, { FC, useContext, useEffect, useState } from 'react'
import Layer from './Layer'
import useLayer from './useLayer'
import { makeLayerHandler, shiftToBottomLeftCorner } from './utility'

import type { OptionsMap } from '../../../../game'
import { drawPreview, clear } from '../../../drawers'
import { GameContext } from '../../contexts/game-context'
import { PatternContext } from '../../patterns/pattern-context'

type Props = {
  options: OptionsMap
}

const PreviewLayer: FC<Props> = ({ options }) => {
  const { game } = useContext(GameContext)
  const [pattern] = useContext(PatternContext)
  const { ref, layer } = useLayer(options)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    if (!layer) return

    const { eventsEmitter } = options
    eventsEmitter.addListener('FIELD_SIDES_CHANGED', () => {
      clear(layer)
    })
  }, [layer])

  const handleMouseDown = () => {
    setIsDrawing(true)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  const layerHandler = makeLayerHandler(layer)

  const handleMouseMove = layerHandler((position, layer) => {
    const bottomLeftCorner = shiftToBottomLeftCorner(position, pattern.grid)
    clear(layer)
    drawPreview(pattern.grid, bottomLeftCorner, layer)

    if (isDrawing) {
      game.spawners.patternSpawn(pattern.grid, bottomLeftCorner)
    }
  })

  const handleMouseLeave = layerHandler((_, layer) => {
    clear(layer)
    setIsDrawing(false)
  })

  const handleMouseClick = layerHandler(position => {
    const bottomLeftCorner = shiftToBottomLeftCorner(position, pattern.grid)
    game.spawners.patternSpawn(pattern.grid, bottomLeftCorner)
  })

  return (
    <Layer
      ref={ref}
      size={options.canvasSize}
      onClick={handleMouseClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="preview-canvas"
    />
  )
}

export default PreviewLayer
