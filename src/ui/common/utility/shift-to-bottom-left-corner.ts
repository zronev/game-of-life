import type { Grid } from '../../../core/grid'

export const shiftToBottomLeftCorner = (
  { x, y }: Point,
  { rows }: Grid
): Point => ({
  x,
  y: y - rows + 1,
})
