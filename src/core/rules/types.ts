export type RulesResult = 'alive' | 'dead' | 'skip'

export interface Rules {
  applyRules(cell: boolean, neighbours: number): RulesResult
}
