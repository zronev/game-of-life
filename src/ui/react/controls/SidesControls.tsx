import React, { FC, useContext, useEffect, useState } from 'react'
import Button from '../common/Button'
import { GameContext } from '../contexts/game-context'
import { FieldSide, FIELD_SIDES, OptionsMap } from '../../../core/options'

const SidesControls: FC = () => {
  const { options } = useContext(GameContext)
  const [currentSides, setCurrentSides] = useState(options.fieldSides)

  useEffect(() => {
    const onFieldSidesChange = ({ fieldSides }: OptionsMap) => {
      setCurrentSides(fieldSides)
    }

    const { eventEmitter } = options
    eventEmitter.addListener('FIELD_SIDES_CHANGED', onFieldSidesChange)

    return () => {
      eventEmitter.removeListener('FIELD_SIDES_CHANGED', onFieldSidesChange)
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
