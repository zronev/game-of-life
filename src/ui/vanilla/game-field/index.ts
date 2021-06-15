import type { Game } from '../../../core/game'
import type { Options } from '../../../core/options'
import type { PatternToSpawn } from '../patterns/pattern-to-spawn'

import { GameFieldView } from './view'
import { GameFieldModel } from './model'
import { GameFieldController } from './controller'
import { renderWrapper } from '../common/utils'

export const renderGameField = (
  game: Game,
  options: Options,
  patternToSpawn: PatternToSpawn
): HTMLElement => {
  const gameFieldWrapper = renderWrapper('section', 'game main__game')

  const model = new GameFieldModel({ game, options, patternToSpawn })
  const view = new GameFieldView(gameFieldWrapper, model)
  new GameFieldController(model, view)

  return gameFieldWrapper
}
