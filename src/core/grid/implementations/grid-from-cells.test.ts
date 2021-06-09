import { GridFromCells } from './grid-from-cells'

it('should return a grid with correct number of rows and columns', () => {
  const actual1 = new GridFromCells([])
  expect(actual1.rows).toEqual(0)
  expect(actual1.columns).toEqual(0)

  const actual2 = new GridFromCells([[true]])
  expect(actual2.rows).toEqual(1)
  expect(actual2.columns).toEqual(1)

  const actual3 = new GridFromCells([
    [true, true],
    [true, true],
    [true, true],
  ])
  expect(actual3.rows).toEqual(3)
  expect(actual3.columns).toEqual(2)
})
