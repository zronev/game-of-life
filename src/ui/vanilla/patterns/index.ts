import type { Game } from '../../../core/game'
import type { PatternToSpawn } from './pattern-to-spawn'

import { PatternsView } from './view'
import { PatternsModel } from './model'
import { patternsController } from './controller'

import { patterns } from '../../../patterns'
import { renderSection } from '../common/utils'

export const renderPatterns = (
  game: Game,
  patternToSpawn: PatternToSpawn
): HTMLElement => {
  const innerWrapper = document.createElement('div')
  innerWrapper.classList.add('patterns')

  const model = new PatternsModel({ game, patterns, patternToSpawn })
  const view = new PatternsView(innerWrapper, model)
  patternsController(model, view, patternToSpawn)

  const patternsWrapper = renderSection('patterns-wrapper main__patterns')
  patternsWrapper.appendChild(innerWrapper)

  return patternsWrapper
}
