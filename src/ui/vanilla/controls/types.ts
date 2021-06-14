import type { Game } from '../../../core/game'
import type { Sides } from '../../../core/grid'
import type { Options } from '../../../core/options'

export type ControlsState = {
  fps: number
  running: boolean
  fieldSides: Sides
  game: Game
  options: Options
}
