import React, { FC, useContext, useRef } from 'react'
import { GameContext } from '../contexts/game-context'

import ColonyLayer from './layers/ColonyLayer'
import GridLayer from './layers/GridLayer'
import PreviewLayer from './layers/PreviewLayer'

const GameField: FC = () => {
  const { game, options } = useContext(GameContext)

  const emitter = game.getEmitter('field')
  const ref = useRef<HTMLElement>(null)

  const previewOptions = {
    ...options.toMap(),
    color: 'rgba(45, 52, 54, 0.75)',
  }

  return (
    <section ref={ref} className="game main__game">
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
    </section>
  )
}

export default GameField
