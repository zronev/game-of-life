import { Grid } from '../../core/field/types'

type PatternKey = 'block' | 'toad' | 'glider' | 'beacon' | 'R pentimo'

const patterns: Record<PatternKey, Grid> = {
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
  beacon: [
    [false, false, true, true],
    [false, false, true, true],
    [true, true, false, false],
    [true, true, false, false],
  ],
  'R pentimo': [
    [false, true, true],
    [true, true, false],
    [false, true, false],
  ],
}

export default patterns
