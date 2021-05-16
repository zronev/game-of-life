import Game from '../../game'
import CounterView from './counter-view'
import { GenerationCounter, PopulationCounter } from '../../game/counters'

export const buildInfo = (game: Game): HTMLElement => {
  const counters = {
    population: new PopulationCounter(game),
    generation: new GenerationCounter(game),
  }

  const countersElements = Object.entries(counters).map(([name, counter]) => {
    const view = new CounterView(name)
    counter.subscribe(view)
    return view.element
  })

  const container = document.createElement('section')
  container.classList.add('info', 'main__info')
  container.append(...countersElements)

  return container
}
