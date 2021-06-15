import type { Grid } from '../../../core/grid'

export const isEqualPoints = (p1: Point, p2: Point): boolean => {
  return p1.x === p2.x && p1.y === p2.y
}

const mapCoordinate = (value: number, cellSize: number): number => {
  return Math.floor(value / cellSize)
}

export const positionOnElement = <
  T extends { clientX: number; clientY: number }
>({
  event,
  targetElementWidth,
  element,
  cellSize,
}: {
  event: T
  targetElementWidth: number
  element: HTMLElement
  cellSize: number
}): Point => {
  const rect = element.getBoundingClientRect()
  const scale = targetElementWidth / rect.width

  const position: Point = {
    x: scale * (event.clientX - rect.left),
    y: scale * (event.clientY - rect.top),
  }

  const mappedPosition: Point = {
    x: mapCoordinate(position.x, cellSize),
    y: mapCoordinate(position.y, cellSize),
  }

  return mappedPosition
}

export const shiftToBottomLeftCorner = (
  { x, y }: Point,
  { rows }: Grid
): Point => ({
  x,
  y: y - rows + 1,
})
