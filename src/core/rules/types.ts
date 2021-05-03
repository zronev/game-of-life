export type RulesResult = 'alive' | 'dead' | 'skip'
export type Rules = (cell: boolean, neighbours: number) => boolean
