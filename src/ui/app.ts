import Game from '../game'
import buildInfo from './info/info'

const app = (game: Game) => {
  // colonyGrid()
  // helperGrid()
  // controls()
  const info = buildInfo(game)
  // patterns()

  const container = document.createElement('main')
  container.classList.add('main')
  container.append(info)

  const root = document.querySelector('#app')
  root?.appendChild(container)

  if (root) document.body.appendChild(root)
}

export default app
