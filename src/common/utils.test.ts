import { clone2DArray, clamp, createGrid, fillGridWithAnotherGrid } from './utils'

describe('clone2DArray', () => {
  it('should return clone of a given homogeneous 2d array', () => {
    const testArray = [[1, 2], [3]]
    const clone = clone2DArray(testArray)

    expect(clone).toEqual(testArray)
  })

  it('should return clone of a given heterogeneous 2d array', () => {
    const testArray = [[1, '2'], [{ key: '3' }]]
    const clone = clone2DArray<number | string | { key: string }>(testArray)

    expect(clone).toEqual(testArray)
  })
})

describe('clamp', () => {
  it('should return value between max and min', () => {
    expect(clamp(1, 0, 2)).toBe(1)
    expect(clamp(3, 0, 2)).toBe(2)
    expect(clamp(-1, 0, 2)).toBe(0)
  })
})

describe('createGrid', () => {
  it('should return a grid with right numbers of rows and columns and filled with given value', () => {
    const grid = createGrid(2, 2, 'value')
    const expected = [
      ['value', 'value'],
      ['value', 'value'],
    ]

    expect(grid).toEqual(expected)
  })
})

describe('fillGridWithAnotherGrid', () => {
  it('should return a grid filled with a passed grid and blank values', () => {
    const grid = [
      [true, true, true],
      [true, true, true],
    ]

    const actual = fillGridWithAnotherGrid(grid, 5, 4)

    const expected = [
      [true, true, true, undefined],
      [true, true, true, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
    ]

    expect(actual).toEqual(expected)
  })
})
