import { GridFromCells } from '../implementations'
import {
  createCells,
  getMaxSides,
  getUsedCells,
  getAvailableCells,
  fillCells,
  countNeighbours,
} from './utils'

describe('createCells', () => {
  it('should return a grid with right numbers of rows and columns and filled with given value', () => {
    const testCases = [
      {
        sides: { rows: 0, columns: 0 },
        expected: [],
      },
      {
        sides: { rows: 1, columns: 1 },
        expected: [[false]],
      },
      {
        sides: { rows: 2, columns: 2 },
        expected: [
          [false, false],
          [false, false],
        ],
      },
    ]

    testCases.forEach(({ sides, expected }) =>
      expect(createCells(sides)).toEqual(expected)
    )
  })
})

describe('getMaxSides', () => {
  it('should return lengths of longest row and column', () => {
    const testCases = [
      {
        cells: [],
        expected: { rows: 0, columns: 0 },
      },
      {
        cells: [[true]],
        expected: { rows: 1, columns: 1 },
      },
      {
        cells: [[true], [true, true], [true, true, true, true]],
        expected: { rows: 3, columns: 4 },
      },
    ]

    testCases.forEach(({ cells, expected }) =>
      expect(getMaxSides(cells)).toEqual(expected)
    )
  })
})

describe('getUsedCells', () => {
  it('should return number of truthy cells', () => {
    const testCases = [
      {
        grid: new GridFromCells([]),
        expected: 0,
      },
      {
        grid: new GridFromCells([[true]]),
        expected: 1,
      },
      {
        grid: new GridFromCells([
          [true, false, false],
          [false, true, true],
        ]),
        expected: 3,
      },
    ]

    testCases.forEach(({ grid, expected }) =>
      expect(getUsedCells(grid)).toEqual(expected)
    )
  })
})

describe('getAvailableCells', () => {
  it('should return number of falsy cells', () => {
    const testCases = [
      {
        grid: new GridFromCells([]),
        expected: 0,
      },
      {
        grid: new GridFromCells([[true]]),
        expected: 0,
      },
      {
        grid: new GridFromCells([
          [true, false, false],
          [false, true, true],
        ]),
        expected: 3,
      },
    ]

    testCases.forEach(({ grid, expected }) =>
      expect(getAvailableCells(grid)).toEqual(expected)
    )
  })
})

describe('fillCells', () => {
  it('should return new cells filled with original cells and with specified rows and columns', () => {
    const testCases = [
      {
        cells: [],
        sides: { rows: 1, columns: 1 },
        expected: [[false]],
      },
      {
        cells: [[true]],
        sides: { rows: 2, columns: 2 },
        expected: [
          [true, false],
          [false, false],
        ],
      },
      {
        cells: [
          [false, true],
          [true, true],
        ],
        sides: { rows: 1, columns: 1 },
        expected: [[false]],
      },
    ]

    testCases.forEach(({ cells, sides, expected }) =>
      expect(fillCells(cells, sides)).toEqual(expected)
    )
  })
})

describe('countNeighbours', () => {
  it("should return number of cell's neighbours", () => {
    const testCases = [
      {
        cells: [],
        x: 1,
        y: 1,
        expected: 0,
      },
      {
        cells: [[true]],
        x: 0,
        y: 0,
        expected: 0,
      },
      {
        cells: [
          [true, false, true],
          [false, true, true],
          [false, false, true],
        ],
        x: 1,
        y: 1,
        expected: 4,
      },
    ]

    testCases.forEach(({ cells, x, y, expected }) =>
      expect(countNeighbours(cells, x, y)).toEqual(expected)
    )
  })
})
