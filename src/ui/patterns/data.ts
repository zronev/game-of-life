import { Grid } from '../../core/field/types'

export type PatternKey = 'block' | 'toad' | 'glider' | 'beacon' | 'R pentimo'

export type PatternsList = Record<PatternKey, Grid>

export const patterns: PatternsList = {
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

export type Sides = {
  rows: number
  columns: number
}

export const getMaxSides = (patterns: PatternsList): Sides => {
  return Object.values(patterns).reduce(
    (acc, pattern) => {
      const rows = pattern.length
      const columns = pattern[0].length

      return {
        rows: rows > acc.rows ? rows : acc.rows,
        columns: columns > acc.columns ? columns : acc.columns,
      }
    },
    { rows: -Infinity, columns: -Infinity }
  )
}
