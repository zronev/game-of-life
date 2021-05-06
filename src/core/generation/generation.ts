import Field, * as FieldUtils from '../field'
import { Rules } from '../rules'
import { arrayClone } from '../../common/utils'

class Generation {
  private _count = 0

  constructor(private _field: Field, private _applyRules: Rules) {}

  public get count(): number {
    return this._count
  }

  public next() {
    this.changeGenerationOnGrid()
    this._count++
  }

  private changeGenerationOnGrid() {
    const { grid, rows, columns } = this._field
    const gridCopy = arrayClone(grid)

    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const cell = gridCopy[y][x]
        const neighbours = FieldUtils.getNeighbours(this._field, x, y)
        gridCopy[y][x] = this._applyRules(cell, neighbours)
      }
    }

    this._field.grid = gridCopy
  }
}

export default Generation
