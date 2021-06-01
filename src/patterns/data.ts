import { Grid } from '../core/field/types'

const stillLifes: Record<string, Grid> = {
  block: [
    [true, true],
    [true, true],
  ],
  beehive: [
    [false, true, true, false],
    [true, false, false, true],
    [true, false, false, true],
    [false, true, true, false],
  ],
  loaf: [
    [false, true, true, false],
    [true, false, false, true],
    [false, true, false, true],
    [false, false, true, false],
  ],
  boat: [
    [true, true, false],
    [true, false, true],
    [false, true, false],
  ],
  tub: [
    [false, true, false],
    [true, false, true],
    [false, true, false],
  ],
}

const oscillators: Record<string, Grid> = {
  blinker: [[true, true, true]],
  toad: [
    [false, false, true, false],
    [true, false, false, true],
    [true, false, false, true],
    [false, true, false, false],
  ],
  beacon: [
    [false, false, true, true],
    [false, false, true, true],
    [true, true, false, false],
    [true, true, false, false],
  ],
}

const spaceships: Record<string, Grid> = {
  glider: [
    [true, true, true],
    [true, false, false],
    [false, true, false],
  ],
}

const methuselahs: Record<string, Grid> = {
  'R pentimo': [
    [false, true, true],
    [true, true, false],
    [false, true, false],
  ],
}

export const patterns = {
  'still lifes': stillLifes,
  oscillators,
  spaceships,
  methuselahs,
}

export const flattenedPatterns = Object.values(patterns).reduce(
  (acc, cur) => ({ ...acc, ...cur }),
  {}
)
