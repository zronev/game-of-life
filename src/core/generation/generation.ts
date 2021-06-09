import Field from '../field'
import { Rules } from '../rules'
import { GridFromCells, getNeighbours } from '../grid'

import { Emitter } from '../../common/event-emitter'
import { clone2DArray } from '../../common/utils'

export type GenerationEventMap = {
  GENERATION_CHANGED: Generation
}

class Generation {
  private _eventEmitter: Emitter<GenerationEventMap>

  constructor(private _field: Field, private _applyRules: Rules) {
    this._eventEmitter = new Emitter()
  }

  public next(): void {
    this._changeGenerationOnGrid()
    this._eventEmitter.dispatch('GENERATION_CHANGED', this)
  }

  public get eventEmitter(): Emitter<GenerationEventMap> {
    return this._eventEmitter
  }

  private _changeGenerationOnGrid() {
    const { grid } = this._field
    const { rows, columns, cells } = grid

    const cellsCopy = clone2DArray(cells)

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const isCellAlive = cellsCopy[y][x]
        const neighbours = getNeighbours(grid, x, y)
        cellsCopy[y][x] = this._applyRules(isCellAlive, neighbours)
      }
    }

    this._field.grid = new GridFromCells(cellsCopy)
  }
}

export default Generation
