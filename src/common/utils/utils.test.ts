import { clone2DArray, clamp } from './utils'

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
