import type { Pattern } from './types'
import { Cells, GridFromCells } from '../core/grid'

const custom: Record<string, Cells> = {
  dot: [[true]],
  brick: [
    [false, true, true, true, false],
    [true, false, true, false, true],
    [false, true, false, true, false],
    [false, true, true, true, false],
    [true, false, true, false, true],
  ],
  // prettier-ignore
  mario: [
    [false, false, false, true, true, true, true, true, false, false, false, false],
    [false, false, true, true, true, true, true, true, true, true, true, false],
    [false, false, true, true, true, true, true, true, true, false, false, false],
    [false, true, true, true, true, true, true, true, true, true, true, false],
    [false, true, true, true, true, true, true, true, true, true, true, true],
    [false, true, true, true, true, true, true, true, true, true, true, false],
    [false, false, true, true, true, true, true, true, true, false, false, false],
    [false, true, true, true, true, true, true, true, true, true, true, false],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [false, false, true, true, true, false, false, true, true, true, false, false],
    [false, true, true, true, false, false, false, false, true, true, true, false],
    [true, true, true, true, false, false, false, false, true, true, true, true],
  ],
}

const stillLifes: Record<string, Cells> = {
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

const oscillators: Record<string, Cells> = {
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

const spaceships: Record<string, Cells> = {
  glider: [
    [true, true, true],
    [true, false, false],
    [false, true, false],
  ],
}

const methuselahs: Record<string, Cells> = {
  'R pentimo': [
    [false, true, true],
    [true, true, false],
    [false, true, false],
  ],
}

const flattenedPatterns = Object.values({
  custom,
  'still lifes': stillLifes,
  oscillators,
  spaceships,
  methuselahs,
}).reduce((acc, cur) => ({ ...acc, ...cur }), {})

export const patterns: Pattern[] = Object.entries(flattenedPatterns).map(
  ([name, cells]) => ({
    name,
    grid: new GridFromCells(cells),
  })
)
