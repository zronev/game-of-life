import Game, { Options } from '../game'
import { Loop } from '../game/loop'

import { buildInfo } from './info'
import { buildControls } from './controls'

const app = (options: Options) => {
  const game = new Game(options)
  game.spawners.randomSpawn()

  const loop = new Loop(10)
  loop.start(() => game.step())

  const info = buildInfo(game)
  const controls = buildControls(game, loop)

  // colonyGrid()
  // helperGrid()
  // patterns()

  const container = document.createElement('main')
  container.classList.add('main')
  container.append(info, controls)

  const root = document.querySelector('#app')
  root?.appendChild(container)

  if (root) document.body.appendChild(root)
}

export default app
