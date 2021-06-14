import type { Game } from '../../../core/game'
import { patterns } from '../../../patterns'
import { PatternsController } from './controller'
import { PatternsModel } from './model'
import type { PatternToSpawn } from './pattern-to-spawn'
import { PatternsView } from './view'

export const renderPatterns = (
  game: Game,
  patternToSpawn: PatternToSpawn
): HTMLElement => {
  const patternsWrapper = document.createElement('section')
  patternsWrapper.classList.add('patterns-wrapper', 'main__patterns')

  const innerWrapper = document.createElement('div')
  innerWrapper.classList.add('patterns')

  const model = new PatternsModel({ game, patterns })
  const view = new PatternsView(innerWrapper, model)
  new PatternsController(model, view, patternToSpawn)

  patternsWrapper.appendChild(innerWrapper)
  return patternsWrapper
}
