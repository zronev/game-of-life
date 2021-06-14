import type { PatternsView } from './view'
import type { PatternsModel } from './model'
import type { PatternToSpawn } from './pattern-to-spawn'
import { patternsByKey } from '../../../patterns'

export class PatternsController {
  constructor(
    patternsModel: PatternsModel,
    patternsView: PatternsView,
    patternToSpawn: PatternToSpawn
  ) {
    patternsView.render(patternsModel.state)
    patternsView.onClick(name => {
      const pattern = patternsByKey[name]
      if (pattern) patternToSpawn.set(pattern)
    })
  }
}
