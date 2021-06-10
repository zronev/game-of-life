import React, { FC, useEffect } from 'react'
import Layer from './Layer'
import useLayer from './useLayer'

import type { OptionsMap } from '../../../../core/options'
import type { WithClass } from '../../common/types'
import { clear, drawGrid } from '../../../common/drawers'

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
