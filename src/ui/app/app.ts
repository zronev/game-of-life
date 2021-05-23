import Game, { Options } from '../../game'

import { buildInfo } from '../info'
import { buildControls } from '../controls'
import { buildGameField } from '../game-field'
import { buildPatterns } from '../patterns'
import ShortcutsController from '../../shortcuts/shortcuts'

const app = (options: Options): void => {
  const game = new Game(options)
  game.spawners.randomSpawn()
  game.loop.start()

  const main = buildMain(game, options)
  const root = buildRoot(main)

  const shortcuts = new ShortcutsController(game)
  shortcuts.init()

  document.body.appendChild(root)
}

const buildMain = (game: Game, options: Options): HTMLElement => {
  const info = buildInfo(game)
  const controls = buildControls(game)
  const gameField = buildGameField(game, options)
  const patterns = buildPatterns(game)

  const container = document.createElement('main')
  container.classList.add('main')
  container.append(info, gameField, controls, patterns)

  return container
}

const buildRoot = (main: HTMLElement): Element => {
  const root = document.querySelector('#app')

  if (!root) {
    throw new Error('Passed wrong selectors of the root element')
  }

  root.appendChild(main)
  return root
}

export default app
