import React, { FC, useContext } from 'react'
import type { WithClass } from '../common/types'

import GameFieldGrid from './GameFieldGrid'
import DrawingWrapper from './DrawingWrapper'
import { ColonyLayer, GridLayer, PreviewLayer } from '../layers'

import { GameContext } from '../contexts/game-context'
import { PREVIEW_COLOR } from '../../common/layers/constant'

const GameField: FC<WithClass> = ({ className }) => {
  const { options: fieldOptions } = useContext(GameContext)
  const previewOptions = { ...fieldOptions.toMap(), color: PREVIEW_COLOR }

  return (
    <DrawingWrapper className={className}>
      <GameFieldGrid options={fieldOptions}>
        {(grid, options) => <ColonyLayer grid={grid} options={options} />}
      </GameFieldGrid>
      <GridLayer options={fieldOptions} />
      <PreviewLayer options={previewOptions} />
    </DrawingWrapper>
  )
}

export default GameField
