import type { Game } from '../../../core/game'
import type { Pattern } from '../../../patterns'
import type { PatternToSpawn } from './pattern-to-spawn'

export type PatternsState = {
  game: Game
  patterns: Pattern[]
  patternToSpawn: PatternToSpawn
}
