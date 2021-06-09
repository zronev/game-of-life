import { Point } from '../../../../../common/types'

const mapCoordinate = (value: number, cellSize: number): number => {
  return Math.floor(value / cellSize)
}

export const positionOnElement = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  element: HTMLElement,
  cellSize: number,
  scale = 1
): Point => {
  const rect = element.getBoundingClientRect()

  const position: Point = {
    x: scale * (e.clientX - rect.left),
    y: scale * (e.clientY - rect.top),
  }

  const mappedPosition: Point = {
    x: mapCoordinate(position.x, cellSize),
    y: mapCoordinate(position.y, cellSize),
  }

  return mappedPosition
}
