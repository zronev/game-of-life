import React, { FC, useEffect } from 'react'
import Info from './info'
import Controls from './controls'
import GameField from './game-field'
import PatternsList, { PatternProvider } from './patterns'

import Game, { Options } from '../../game'
import ShortcutsController from '../shortcuts'
import { GameContext } from './contexts/game-context'

type Props = {
  game: Game
  options: Options
}

const App: FC<Props> = ({ game, options }) => {
  const shortcuts = new ShortcutsController(game, options)

  useEffect(() => {
    game.loop.start()
    game.spawners.randomSpawn()
    shortcuts.init()
  }, [])

  return (
    <GameContext.Provider value={{ game, options }}>
      <main className="main">
        <PatternProvider>
          <Info />
          <GameField />
          <PatternsList />
          <Controls />
        </PatternProvider>
      </main>
    </GameContext.Provider>
  )
}

export default App
