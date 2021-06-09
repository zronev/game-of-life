import { createContext } from 'react'
import type { Game } from '../../../core/game'
import type { Options } from '../../../core/options'

type Context = {
  game: Game
  options: Options
}

export const GameContext = createContext<Context>({} as Context)
