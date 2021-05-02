import { Rules, RulesResult } from './types'

class ClassicRules implements Rules {
  public applyRules(cell: boolean, neighbours: number): RulesResult {
    if (cell && (neighbours < 2 || neighbours > 3)) return 'dead'
    if (!cell && neighbours === 3) return 'alive'
    return 'skip'
  }
}

export default ClassicRules
