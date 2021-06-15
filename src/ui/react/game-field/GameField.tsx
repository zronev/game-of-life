import React, { FC, useContext } from 'react'
import type { WithClass } from '../common/types'
import DrawingWrapper from './DrawingWrapper'
import { GameContext } from '../contexts/game-context'
import { ColonyLayer, GridLayer, PreviewLayer } from '../layers'
import { PREVIEW_COLOR } from '../../common/layers/constant'

const GameField: FC<WithClass> = ({ className }) => {
  const { game, options } = useContext(GameContext)

  const emitter = game.getEmitter('field')
  const previewOptions = { ...options.toMap(), color: PREVIEW_COLOR }

  return (
    <DrawingWrapper className={className}>
      <ColonyLayer
        options={options}
        onLayerReady={draw => {
          emitter.addListener('GRID_CHANGED', draw)
        }}
        onUnmount={draw => {
          emitter.removeListener('GRID_CHANGED', draw)
        }}
      />
      <GridLayer options={options} />
      <PreviewLayer options={previewOptions} />
    </DrawingWrapper>
  )
}

export default GameField
