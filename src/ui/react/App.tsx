import React, { FC, useEffect } from 'react'

import Info from './info'
import Controls from './controls'
import GameField from './game-field'
import Shortcuts from './shortcuts'
import PatternsList, { PatternProvider } from './patterns'

import { useShortcuts } from './adapters/useShortcuts'
import { GameContext } from './contexts/game-context'

import type { Game } from '../../core/game'
import type { Options } from '../../core/options'

type Props = {
  game: Game
  options: Options
}

const App: FC<Props> = ({ game, options }) => {
  useEffect(() => {
    game.loop.start()
    game.spawners.randomSpawn()
  }, [])

  useShortcuts(game, options)

  return (
    <GameContext.Provider value={{ game, options }}>
      <main className="main">
        <PatternProvider>
          <Info />
          <GameField />
          <PatternsList />
          <Controls />
          <Shortcuts className="main__shortcuts" />
        </PatternProvider>
      </main>
    </GameContext.Provider>
  )
}

export default App
