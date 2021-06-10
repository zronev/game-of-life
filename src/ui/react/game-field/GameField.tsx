import React, { FC, useContext } from 'react'
import { ColonyLayer, GridLayer, PreviewLayer } from './layers'
import ControllerWrapper from './ControllerWrapper'
import { GameContext } from '../contexts/game-context'

const GameField: FC = () => {
  const { game, options } = useContext(GameContext)

  const emitter = game.getEmitter('field')

  const previewOptions = {
    ...options.toMap(),
    color: 'rgba(45, 52, 54, 0.75)',
  }

  return (
    <section className="game main__game">
      <ControllerWrapper>
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
      </ControllerWrapper>
    </section>
  )
}

export default GameField
