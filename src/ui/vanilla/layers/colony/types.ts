import type { Grid } from '../../../../core/grid'
import type { LayerState } from '../layer/types'

export type ColonyLayerState = {
  grid: Grid
} & LayerState
