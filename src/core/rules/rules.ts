import { RulesResult } from './types'

class Rules {
  constructor() {}

  public applyRules(cell: boolean, neighbours: number): RulesResult {
    if (cell && (neighbours < 2 || neighbours > 3)) return 'dead'
    if (!cell && neighbours === 3) return 'alive'
    return 'skip'
  }
}

export default Rules
