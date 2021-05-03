import { arrayClone, clamp, createMatrix } from './utils'

describe('arrayClone', () => {
  describe('1d array', () => {
    it('should return clone of a given homogeneous array', () => {
      const testArray = [1, 2, 3]
      const clone = arrayClone(testArray)

      expect(clone).toEqual(testArray)
    })

    it('should return clone of a given heterogeneous array', () => {
      const testArray = [1, '2', { key: '3' }]
      const clone = arrayClone(testArray)

      expect(clone).toEqual(testArray)
    })
  })

  describe('2d array', () => {
    it('should return clone of a given homogeneous array', () => {
      const testArray = [[1, 2], [3]]
      const clone = arrayClone(testArray)

      expect(clone).toEqual(testArray)
    })

    it('should return clone of a given heterogeneous array', () => {
      const testArray = [[1, '2'], [{ key: '3' }]]
      const clone = arrayClone(testArray)

      expect(clone).toEqual(testArray)
    })
  })
})

describe('clamp', () => {
  it('should return value between max and min', () => {
    expect(clamp(1, 0, 2)).toBe(1)
    expect(clamp(3, 0, 2)).toBe(2)
    expect(clamp(-1, 0, 2)).toBe(0)
  })
})

describe('createMatrix', () => {
  it('should return matrix with right numbers of rows and columns and filled with given value', () => {
    const matrix = createMatrix(2, 2, 'value')
    const expected = [
      ['value', 'value'],
      ['value', 'value'],
    ]

    expect(matrix).toEqual(expected)
  })
})
