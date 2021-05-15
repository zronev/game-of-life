import Field from './field'

describe('when passed only a grid options', () => {
  it('should return a grid with correct number of rows and columns', () => {
    const actual1 = new Field({ rows: 2, columns: 2 })
    expect(actual1.grid).toEqual([
      [false, false],
      [false, false],
    ])

    const actual2 = new Field({ rows: 0, columns: 0 })
    expect(actual2.grid).toEqual([])
  })
})

describe('when passed a prepared grid', () => {
  it('should return a grid with correct number of rows and columns', () => {
    const actual1 = new Field({ rows: 2, columns: 2 }, [
      [false, false],
      [false, false],
    ])
    expect(actual1.grid).toEqual([
      [false, false],
      [false, false],
    ])

    const actual2 = new Field({ rows: 0, columns: 0 }, [
      [false, false],
      [false, false],
    ])
    expect(actual2.grid).toEqual([
      [false, false],
      [false, false],
    ])
  })
})
