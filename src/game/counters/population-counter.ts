import Counter from './counter'
import Field, { FieldUtils } from '../../core/field'

class PopulationCounter extends Counter {
  update(_field: Field): void {
    this._count = FieldUtils.getUsedCells(_field)
    this.notify()
  }
}

export default PopulationCounter
