import type { PatternsView } from './view'
import type { PatternsModel } from './model'
import type { PatternToSpawn } from './pattern-to-spawn'
import { patternsByKey } from '../../../patterns'

export const patternsController = (
  model: PatternsModel,
  view: PatternsView,
  patternToSpawn: PatternToSpawn
): void => {
  view.render(model.state)
  view.onClick(name => {
    const pattern = patternsByKey[name]
    if (pattern) patternToSpawn.set(pattern)
  })
}
