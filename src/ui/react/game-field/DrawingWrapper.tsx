import React, {
  FC,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import type { WithClass } from '../common/types'
import { PatternContext } from '../patterns'
import { GameContext } from '../contexts/game-context'
import { positionOnElement, shiftToBottomLeftCorner } from '../../common/utils'
import type { OptionsMap } from '../../../core/options'

const DrawingWrapper: FC<WithClass> = ({ children, className }) => {
  const wrapper = useRef<HTMLDivElement>(null)
  const { game, options } = useContext(GameContext)
  const [pattern] = useContext(PatternContext)
  const [isDrawing, setIsDrawing] = useState(false)
  const [cellSize, setCellSize] = useState(options.cellSize)

  useEffect(() => {
    const onFieldSidesChange = ({ cellSize }: OptionsMap) => {
      setCellSize(cellSize)
    }

    const { eventEmitter } = options
    eventEmitter.addListener('FIELD_SIDES_CHANGED', onFieldSidesChange)

    return () => {
      eventEmitter.removeListener('FIELD_SIDES_CHANGED', onFieldSidesChange)
    }
  })

  const spawn = (event: MouseEvent<HTMLElement>, element: HTMLDivElement) => {
    const position = positionOnElement({
      event,
      element,
      cellSize,
      targetElementWidth: options.canvasSize.width,
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
      className={`game ${className}`}
    >
      {children}
    </section>
  )
}

export default DrawingWrapper
