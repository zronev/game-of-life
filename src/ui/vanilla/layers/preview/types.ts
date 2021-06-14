import type { LayerState } from '../layer/types'
import type { PatternToSpawn } from '../../patterns/pattern-to-spawn'

export type PreviewLayerState = {
  patternToSpawn: PatternToSpawn
} & LayerState
