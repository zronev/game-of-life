import React, { FC, useContext, useEffect, useState } from 'react'
import Button from '../../common/Button'
import { GameContext } from '../contexts/game-context'

const LoopControls: FC = () => {
  const { game } = useContext(GameContext)

  const [loopInfo, setLoopInfo] = useState({
    isRunning: game.loop.running,
    fps: game.loop.fps,
  })

  const emitter = game.getEmitter('loop')

  useEffect(() => {
    emitter.addListener('FPS_CHANGED', (fps: number) => {
      setLoopInfo(i => ({
        ...i,
        fps,
      }))
    })

    emitter.addListener('PLAYBACK_CHANGED', (isRunning: boolean) => {
      setLoopInfo(i => ({
        ...i,
        isRunning: isRunning,
      }))
    })
  }, [])

  const handleSlower = () => {
    game.loop.changeFpsBy(-5)
  }

  const handleFaster = () => {
    game.loop.changeFpsBy(5)
  }

  const handlePlayback = () => {
    game.loop.toggle()
  }

  return (
    <>
      <Button
        onClick={handleSlower}
        disabled={game.loop.minFps === loopInfo.fps}
      >
        slower
      </Button>
      <Button onClick={handlePlayback}>
        {loopInfo.isRunning ? 'pause' : 'play'}
      </Button>
      <Button
        disabled={game.loop.maxFps === loopInfo.fps}
        onClick={handleFaster}
      >
        faster
      </Button>
    </>
  )
}

export default LoopControls
