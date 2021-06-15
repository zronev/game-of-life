import type { Game } from '../../core/game'
import type { Options } from '../../core/options'

import { renderInfo } from './info'
import { renderGameField } from './game-field'
import { renderPatterns } from './patterns'
import { renderControls } from './controls'
import { renderShortcuts } from './shortcuts'
import { renderWrapper } from './common/utils'

import ShortcutsController from '../common/shortcuts'
import { patterns } from '../../patterns/data'
import { PatternToSpawn } from './patterns/pattern-to-spawn'

const renderApp = (game: Game, options: Options) => {
  const rootElement = document.getElementById('root')

  if (!rootElement) {
    throw new Error('Wrong selector for the root element')
  }

  const patternToSpawn = new PatternToSpawn(patterns[0])

  const info = renderInfo(game)
  const shortcutsInfo = renderShortcuts()
  const controls = renderControls(game, options)
  const patternsSection = renderPatterns(game, patternToSpawn)
  const gameField = renderGameField(game, options, patternToSpawn)

  const mainWrapper = renderWrapper('main', 'main')
  mainWrapper.append(info, gameField, controls, patternsSection, shortcutsInfo)
  rootElement.appendChild(mainWrapper)
}

export const app = (game: Game, options: Options): void => {
  renderApp(game, options)

  game.loop.start()
  game.spawners.randomSpawn()

  const shortcuts = new ShortcutsController(game, options)
  shortcuts.init()
}
