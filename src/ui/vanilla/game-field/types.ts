import type { Game } from '../../../core/game'
import type { Options } from '../../../core/options'
import type { PatternToSpawn } from '../patterns/pattern-to-spawn'

export type GameFieldState = {
  game: Game
  options: Options
  patternToSpawn: PatternToSpawn
}

export type MouseEventCallback = (
  event: MouseEvent,
  element: HTMLElement
) => void
