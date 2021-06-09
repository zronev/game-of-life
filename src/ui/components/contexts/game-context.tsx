import { createContext } from 'react'
import type { Game, Options } from '../../../game'

type Context = {
  game: Game
  options: Options
}

export const GameContext = createContext<Context>({} as Context)
