import { Grid } from '../../core/field/types'

type StillLife = 'block' | 'beehive' | 'loaf' | 'boat' | 'tub'
type Oscillator = 'blinker' | 'toad' | 'beacon' | 'pulsar' | 'penta-decathlon'
type Spaceship =
  | 'glider'
  | 'light-weight spaceship'
  | 'middle-weight spaceship'
  | 'heavy-weight spaceship'
type Methuselah = 'R pentimo' | 'Diehard' | 'Acorn'

// type PatternName = StillLife | Oscillator | Spaceship | Methuselah
// type PatternType = 'still lifes' | 'oscillators' | 'spaceships' | 'methuselahs'

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

const oscillators: Record<Oscillator, Grid> = {
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

const spaceships: Record<Spaceship, Grid> = {
  glider: [
    [true, true, true],
    [true, false, false],
    [false, true, false],
  ],
}

const methuselahs: Record<Methuselah, Grid> = {
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

export const flattenedPatterns = Object.values(patterns).reduce<
  Record<string, Grid>
>((acc, cur) => ({ ...acc, ...cur }), {})
