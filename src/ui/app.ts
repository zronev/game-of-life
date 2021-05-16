import Game, { Options } from '../game'
import { Loop } from '../game/loop'

import { buildInfo } from './info'
import { buildControls } from './controls'
import { buildGameField } from './game-field'

const app = (options: Options) => {
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

  // colonyGrid()
  // helperGrid()
  // patterns()

  const container = document.createElement('main')
  container.classList.add('main')
  container.append(info, gameField, controls)

  return container
}

const buildRoot = (main: HTMLElement): Element | null => {
  const root = document.querySelector('#app')
  root?.appendChild(main)
  return root
}

export default app
