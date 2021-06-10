import React, { FC, useEffect } from 'react'
import Layer from './Layer'
import useLayer from './useLayer'
import { drawColony, clear } from '../../../../common/drawers'

import type { Grid } from '../../../../../core/grid'
import type { OptionsMap } from '../../../../../core/options'
import type { WithClass } from '../../../common/types'

type Props = {
  options: OptionsMap
  onLayerReady: (callback: (grid: Grid) => void) => void
  onUnmount?: (callback: (grid: Grid) => void) => void
} & WithClass

const ColonyLayer: FC<Props> = ({
  options,
  onLayerReady,
  onUnmount,
  className = '',
}) => {
  const { ref, layer } = useLayer(options)

  useEffect(() => {
    if (!layer) return

    const draw = (grid: Grid) => {
      clear(layer)
      drawColony(grid, layer)
    }

    onLayerReady(draw)

    return () => onUnmount?.(draw)
  }, [layer])

  return (
    <Layer
      ref={ref}
      size={options.canvasSize}
      className={`colony-canvas ${className}`}
    />
  )
}

export default ColonyLayer
