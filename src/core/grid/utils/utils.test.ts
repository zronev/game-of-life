import { GridFromCells } from '../implementations'
import { createCells, getAvailableCells, getUsedCells } from './utils'

describe('createCells', () => {
  it('should return a grid with right numbers of rows and columns and filled with given value', () => {
    const actual1 = createCells({ rows: 0, columns: 0 })
    expect(actual1).toEqual([])

    const actual2 = createCells({ rows: 1, columns: 1 })
    expect(actual2).toEqual([[false]])

    const actual3 = createCells({ rows: 2, columns: 2 })
    expect(actual3).toEqual([
      [false, false],
      [false, false],
    ])
  })
})

describe('getUsedCells', () => {
  it('should return number of truthy cells', () => {
    const testCases = [
      {
        actual: new GridFromCells([]),
        expected: 0,
      },
      {
        actual: new GridFromCells([[true]]),
        expected: 1,
      },
      {
        actual: new GridFromCells([
          [true, false, false],
          [false, true, true],
        ]),
        expected: 3,
      },
    ]

    testCases.forEach(({ actual, expected }) =>
      expect(getUsedCells(actual)).toEqual(expected)
    )
  })
})

describe('getAvailableCells', () => {
  it('should return number of falsy cells', () => {
    const testCases = [
      {
        actual: new GridFromCells([]),
        expected: 0,
      },
      {
        actual: new GridFromCells([[true]]),
        expected: 0,
      },
      {
        actual: new GridFromCells([
          [true, false, false],
          [false, true, true],
        ]),
        expected: 3,
      },
    ]

    testCases.forEach(({ actual, expected }) =>
      expect(getAvailableCells(actual)).toEqual(expected)
    )
  })
})
