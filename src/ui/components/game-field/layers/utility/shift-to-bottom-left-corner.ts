import { Point } from '../../../../../common/types'
import { Grid } from '../../../../../core/grid'

export const shiftToBottomLeftCorner = (
  { x, y }: Point,
  { rows }: Grid
): Point => ({
  x,
  y: y - rows + 1,
})
