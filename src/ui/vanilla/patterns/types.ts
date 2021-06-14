import type { Game } from '../../../core/game'
import type { Pattern } from '../../../patterns'

export type PatternsState = {
  patterns: Pattern[]
  game: Game
}
