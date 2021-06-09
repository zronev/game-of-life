import React, { FC, useEffect } from 'react'
import Layer from './Layer'
import useLayer from './useLayer'

import { OptionsMap } from '../../../../game'
import { clear, drawGrid } from '../../../drawers'
import { WithClass } from '../../../common/types'

type Props = {
  options: OptionsMap
} & WithClass

const GridLayer: FC<Props> = ({ options, className = '' }) => {
  const { ref, layer } = useLayer(options)

  useEffect(() => {
    if (!layer) return

    clear(layer)
    drawGrid(layer, options)
  }, [layer, options.cellSize])

  return (
    <Layer
      ref={ref}
      size={options.canvasSize}
      className={`grid-canvas ${className}`}
    />
  )
}

export default GridLayer
