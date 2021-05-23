import Game from '../../game'
import { makePattern } from './pattern'
import { flattenedPatterns } from './data'
import { getMaxSides } from '../../common/utils'

export const buildPatterns = (game: Game): HTMLElement => {
  const maxSides = getMaxSides(Object.values(flattenedPatterns))

  const patternsElements = Object.entries(flattenedPatterns).map(
    ([name, grid]) => makePattern(name, grid, game.spawners, maxSides)
  )

  const container = document.createElement('section')
  container.classList.add('patterns', 'main__patterns')
  container.append(...patternsElements)

  return container
}
