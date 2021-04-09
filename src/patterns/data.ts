import { GridType } from '../core/utility/types'

type PatternKey = 'block' | 'toad' | 'glider'

const patterns: Record<PatternKey, GridType> = {
  block: [
    [true, true],
    [true, true],
  ],
  toad: [
    [false, false, true, false],
    [true, false, false, true],
    [true, false, false, true],
    [false, true, false, false],
  ],
  glider: [
    [true, true, true],
    [true, false, false],
    [false, true, false],
  ],
}

export default patterns
