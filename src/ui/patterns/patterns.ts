import Game from '../../game'
import { getMaxSides, patterns } from './data'
import { makePattern } from './pattern'

export const buildPatterns = (game: Game): HTMLElement => {
  const maxSides = getMaxSides(patterns)

  const patternsElements = Object.entries(patterns).map(([name, grid]) =>
    makePattern(name, grid, game.spawners, maxSides)
  )

  const container = document.createElement('section')
  container.classList.add('patterns', 'main__patterns')
  container.append(...patternsElements)

  return container
}
