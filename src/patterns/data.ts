import type { Pattern } from './types'
import { Cells, GridFromCells } from '../core/grid'

//prettier-ignore
const data: Record<string, Cells> = {
  // Custom
  'single cell': [[true]],
  // Oscillators
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
  blinker: [[true, true, true]],
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
  'LWSS': [
    [false, true, true, true, true],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [true, false, false, true, false],
  ],
  'MWSS': [
    [false, true, true, true, true, true],
    [true, false, false, false, false, true],
    [false, false, false, false, false, true],
    [true, false, false, false, true, false],
    [false, false, true, false, false, false],
  ],
  'HWSS': [
    [false, true, true, true, true, true, true],
    [true, false, false, false, false, false, true],
    [false, false, false, false, false, false, true],
    [true, false, false, false, false, true, false],
    [false, false, true, true, false, false, false],
  ],
  // Special
  'R pentimo': [
    [false, true, true],
    [true, true, false],
    [false, true, false],
  ],
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
