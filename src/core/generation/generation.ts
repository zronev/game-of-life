import Field, * as FieldService from '../field'
import { RulesResult, Rules } from '../rules'
import { arrayClone } from '../../common/utils'

class Generation {
  constructor(
    private _field: Field,
    private _rules: Rules,
    private _count = 0
  ) {}

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
        const neighbours = FieldService.countNeighbours(this._field, x, y)
        const rulesState = this._rules.applyRules(cell, neighbours)
        gridCopy[y][x] = this.isCellAlive(cell, rulesState)
      }
    }

    this._field.grid = gridCopy
  }

  private isCellAlive(cell: boolean, rulesResult: RulesResult): boolean {
    switch (rulesResult) {
      case 'alive':
        return true
      case 'dead':
        return false
      default:
        return cell
    }
  }
}

export default Generation
