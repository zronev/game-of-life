import Game from '../../game'
import CounterView from './counter-view'

const buildInfo = (game: Game) => {
  const counters = Object.entries(game.counters).map(([name, counter]) => {
    const view = new CounterView(name)
    counter.subscribe(view)
    return view.element
  })

  const container = document.createElement('section')
  container.classList.add('info', 'main__info')
  container.append(...counters)

  return container
}

export default buildInfo
