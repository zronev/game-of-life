import { Model } from '../common/mvc/model'
import type { PatternsState } from './types'

export class PatternsModel extends Model<PatternsState> {
  constructor(initialState: PatternsState) {
    super(initialState)
  }
}
