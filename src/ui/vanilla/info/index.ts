import type { Game } from '../../../core/game'

import { InfoView } from './view'
import { InfoModel } from './model'
import { InfoController } from './controller'
import { renderWrapper } from '../common/utils'

export const renderInfo = (game: Game): HTMLElement => {
  const infoWrapper = renderWrapper('section', 'info main__info')

  const model = new InfoModel(game)
  const view = new InfoView(infoWrapper, model)
  new InfoController(model, view)

  return infoWrapper
}
