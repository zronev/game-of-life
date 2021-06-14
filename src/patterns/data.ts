import type { Pattern } from './types'
import { Cells, GridFromCells } from '../core/grid'

const data: Record<string, Cells> = {
  // Custom
  dot: [[true]],
  // Still lifes
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
  block: [
    [true, true],
    [true, true],
  ],
  ship: [
    [true, true, false],
    [true, false, true],
    [false, true, true],
  ],
  // Oscillators
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
  //prettier-ignore
  pulsar: [
    [false, false, true, true, true, false, false, false , true, true , true, false, false],
    [false, false, false, false, false, false, false, false, false , false, false, false],
    [true, false, false, false, false, true, false, true, false , false, false, false, true],
    [true, false, false, false, false, true, false, true, false , false, false, false, true],
    [true, false, false, false, false, true, false, true, false , false, false, false, true],
    [false, false, true, true, true, false, false, false, true , true, true, false, false],
    [false, false, false, false, false, false, false, false, false , false, false, false],
    [false, false, true, true, true, false, false, false, true, true , true, false, false],
    [true, false, false, false, false, true, false, true, false, false, false, false, true],
    [true, false, false, false, false, true, false, true, false, false, false, false, true],
    [true, false, false, false, false, true, false, true, false, false, false, false, true],
    [false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, true, true, true, false, false, false, true, true, true, false, false],
  ],
  // Space Ships
  glider: [
    [true, true, true],
    [true, false, false],
    [false, true, false],
  ],
  // Special
  'R pentimo': [
    [false, true, true],
    [true, true, false],
    [false, true, false],
  ],
}

export const patternsByKey: Record<string, Pattern> = Object.entries(
  data
).reduce<Record<string, Pattern>>((acc, [name, cells]) => {
  acc[name] = {
    name,
    grid: new GridFromCells(cells),
  }

  return acc
}, {})

export const patterns: Pattern[] = Object.entries(data).map(
  ([name, cells]) => ({
    name,
    grid: new GridFromCells(cells),
  })
)
