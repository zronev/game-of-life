import React, { FC, useContext } from 'react'
import Button from '../common/Button'
import { GameContext } from '../contexts/game-context'

const FieldControls: FC = () => {
  const { game } = useContext(GameContext)

  return (
    <>
      <Button onClick={() => game.spawners.randomSpawn()}>spawn</Button>
      <Button onClick={() => game.clearField()}>clear</Button>
    </>
  )
}

export default FieldControls
