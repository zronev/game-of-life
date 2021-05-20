import Game, { Options } from '../../game'
import { Loop } from '../../game/loop'

import { buildInfo } from '../info'
import { buildControls } from '../controls'
import { buildGameField } from '../game-field'
import { buildPatterns } from '../patterns'

const app = (options: Options): void => {
  const game = new Game(options)
  game.spawners.randomSpawn()

  const loop = new Loop(10)
  loop.start(() => game.step())

  const main = buildMain(game, loop, options)
  const root = buildRoot(main)

  if (root) document.body.appendChild(root)
}

const buildMain = (game: Game, loop: Loop, options: Options): HTMLElement => {
  const info = buildInfo(game)
  const controls = buildControls(game, loop)
  const gameField = buildGameField(game, options)
  const patterns = buildPatterns(game)

  const container = document.createElement('main')
  container.classList.add('main')
  container.append(info, gameField, controls, patterns)

  return container
}

const buildRoot = (main: HTMLElement): Element | null => {
  const root = document.querySelector('#app')
  root?.appendChild(main)
  return root
}

export default app
