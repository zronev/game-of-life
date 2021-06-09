import { GridFromOptions } from './grid-from-options'

it('should return a grid with correct number of rows and columns', () => {
  const actual1 = new GridFromOptions({ rows: 0, columns: 0 })
  expect(actual1.rows).toEqual(0)
  expect(actual1.columns).toEqual(0)

  const actual2 = new GridFromOptions({ rows: 4, columns: 4 })
  expect(actual2.rows).toEqual(4)
  expect(actual2.columns).toEqual(4)

  const actual3 = new GridFromOptions({ rows: 2, columns: 4 })
  expect(actual3.rows).toEqual(2)
  expect(actual3.columns).toEqual(4)
})
