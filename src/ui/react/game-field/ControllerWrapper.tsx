import React, { FC, MouseEvent, useContext, useRef, useState } from 'react'
import { GameContext } from '../contexts/game-context'
import { PatternContext } from '../patterns'
import { positionOnElement, shiftToBottomLeftCorner } from '../layers'

const ControllerWrapper: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
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
    if (!ref.current) return
    spawn(event, ref.current)
  }

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!ref.current || !isDrawing) return
    spawn(event, ref.current)
  }

  const enableDrawing = () => setIsDrawing(true)
  const disableDrawing = () => setIsDrawing(false)

  return (
    <div
      ref={ref}
      onClick={handleMouseClick}
      onMouseDown={enableDrawing}
      onMouseUp={disableDrawing}
      onMouseLeave={disableDrawing}
      onMouseMove={handleMouseMove}
      className="flex game main__game"
    >
      {children}
    </div>
  )
}

export default ControllerWrapper
