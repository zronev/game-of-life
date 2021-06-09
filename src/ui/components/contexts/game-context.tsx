import { createContext } from 'react'
import Game, { Options } from '../../../game'

type Context = {
  game: Game
  options: Options
}

export const GameContext = createContext<Context>({} as Context)
