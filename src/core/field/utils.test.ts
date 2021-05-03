import Field from './field'
import { getEmptyGrid, getUsedCells, getAvailableCells } from './utils'

describe('getEmptyGrid', () => {
  it('should return empty grid', () => {
    const testCases = [
      {
        actual: new Field({ rows: 0, columns: 0 }),
        expected: [],
      },
      {
        actual: new Field({ rows: 1, columns: 1 }),
        expected: [[false]],
      },
      {
        actual: new Field({ rows: 2, columns: 2 }),
        expected: [
          [false, false],
          [false, false],
        ],
      },
    ]

    testCases.forEach(({ actual, expected }) =>
      expect(getEmptyGrid(actual)).toEqual(expected)
    )
  })
})

describe('getUsedCells', () => {
  it('should return number of truthy cells', () => {
    const testCases = [
      {
        actual: new Field({ rows: 2, columns: 3 }, [
          [true, false, false],
          [false, false, true],
        ]),
        expected: 2,
      },
      {
        actual: new Field({ rows: 0, columns: 0 }),
        expected: 0,
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
        actual: new Field({ rows: 2, columns: 3 }, [
          [true, false, false],
          [false, false, true],
        ]),
        expected: 4,
      },
      {
        actual: new Field({ rows: 0, columns: 0 }),
        expected: 0,
      },
    ]

    testCases.forEach(({ actual, expected }) =>
      expect(getAvailableCells(actual)).toEqual(expected)
    )
  })
})
