import React, { FC, MouseEvent, useContext, useRef, useState } from 'react'
import { PatternContext } from '../patterns'
import { GameContext } from '../contexts/game-context'
import { positionOnElement, shiftToBottomLeftCorner } from '../../common/utils'

const DrawingWrapper: FC = ({ children }) => {
  const wrapper = useRef<HTMLDivElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const { game, options } = useContext(GameContext)
  const [pattern] = useContext(PatternContext)

  const { canvasSize, cellSize } = options

  const spawn = (event: MouseEvent<HTMLElement>, element: HTMLDivElement) => {
    const position = positionOnElement({
      event,
      element,
      cellSize,
      targetElementWidth: canvasSize.width,
    })

    const bottomLeftCorner = shiftToBottomLeftCorner(position, pattern.grid)
    game.spawners.patternSpawn(pattern.grid, bottomLeftCorner)
  }

  const handleMouseClick = (event: MouseEvent<HTMLElement>) => {
    if (!wrapper.current) return
    spawn(event, wrapper.current)
  }

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!wrapper.current || !isDrawing) return
    spawn(event, wrapper.current)
  }

  const handleMouseDown = () => {
    setIsDrawing(true)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  return (
    <section
      ref={wrapper}
      onClick={handleMouseClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="game main__game"
    >
      {children}
    </section>
  )
}

export default DrawingWrapper
