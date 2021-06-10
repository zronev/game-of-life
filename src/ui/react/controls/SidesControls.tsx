import React, { FC, useContext, useEffect, useState } from 'react'
import Button from '../common/Button'
import { GameContext } from '../contexts/game-context'
import { FieldSide, FIELD_SIDES, OptionsMap } from '../../../core/options'

const SidesControls: FC = () => {
  const { game, options } = useContext(GameContext)
  const [currentSides, setCurrentSides] = useState(options.fieldSides)

  useEffect(() => {
    const { eventsEmitter } = options

    const onFieldSizeChange = ({ fieldSides }: OptionsMap) => {
      game.changeFieldSize(fieldSides)
      setCurrentSides(fieldSides)
    }

    eventsEmitter.addListener('FIELD_SIDES_CHANGED', onFieldSizeChange)

    return () => {
      eventsEmitter.removeListener('FIELD_SIDES_CHANGED', onFieldSizeChange)
    }
  }, [])

  const handleSize = (side: FieldSide) => {
    options.changeFieldSides(side)
  }

  return (
    <>
      {Object.keys(FIELD_SIDES).map(side => (
        <Button
          key={side}
          onClick={() => handleSize(side as FieldSide)}
          disabled={currentSides.rows === FIELD_SIDES[side as FieldSide]}
        >
          {side}
        </Button>
      ))}
    </>
  )
}

export default SidesControls
