import Field from './field'
import { GridFromOptions } from '../grid'

let field: Field

beforeEach(() => {
  const grid = new GridFromOptions({ rows: 4, columns: 4 })
  field = new Field(grid)
})

describe('when a grid changed', () => {
  it('should emit event', () => {
    let counter = 0
    field.eventEmitter.addListener('GRID_CHANGED', () => counter++)
    field.grid = new GridFromOptions({ rows: 4, columns: 4 })

    expect(counter).toBe(1)
  })
})
