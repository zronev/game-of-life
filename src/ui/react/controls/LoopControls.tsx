import React, { FC, useContext, useEffect, useState } from 'react'
import Button from '../common/Button'
import { GameContext } from '../contexts/game-context'

const LoopControls: FC = () => {
  const { game } = useContext(GameContext)
  const [fps, setFps] = useState(game.loop.fps)
  const [isRunning, setIsRunning] = useState(game.loop.running)

  const emitter = game.getEmitter('loop')

  useEffect(() => {
    emitter.addListener('FPS_CHANGED', setFps)
    emitter.addListener('PLAYBACK_CHANGED', setIsRunning)
  }, [])

  const handlePlayback = () => game.loop.toggle()
  const handleSlower = () => game.loop.changeFpsBy(-5)
  const handleFaster = () => game.loop.changeFpsBy(5)

  const isReachedMinFps = fps === game.loop.minFps
  const isReachedMaxFps = fps === game.loop.maxFps

  return (
    <>
      <Button onClick={handleSlower} disabled={isReachedMinFps}>
        slower
      </Button>
      <Button onClick={handlePlayback}>{isRunning ? 'pause' : 'play'}</Button>
      <Button onClick={handleFaster} disabled={isReachedMaxFps}>
        faster
      </Button>
    </>
  )
}

export default LoopControls
