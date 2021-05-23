import Field, { FieldUtils } from '../field'
import { Rules } from '../rules'
import { arrayClone } from '../../common/utils'
import { Event } from '../../common/event'

type GenerationChangeEvent = Event<unknown>

class Generation {
  private _onGenerationChanged: GenerationChangeEvent

  constructor(private _field: Field, private _applyRules: Rules) {
    this._onGenerationChanged = new Event()
  }

  public next(): void {
    this._changeGenerationOnGrid()
    this._onGenerationChanged.trigger({})
  }

  public get onGenerationChanged(): GenerationChangeEvent {
    return this._onGenerationChanged
  }

  private _changeGenerationOnGrid() {
    const { grid, rows, columns } = this._field
    const gridCopy = arrayClone(grid)

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const isCellAlive = gridCopy[y][x]
        const neighbours = FieldUtils.getNeighbours(this._field, x, y)
        gridCopy[y][x] = this._applyRules(isCellAlive, neighbours)
      }
    }

    this._field.grid = gridCopy
  }
}

export default Generation
