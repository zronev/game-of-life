import type { Game } from '../../../core/game'

import { InfoView } from './view'
import { InfoModel } from './model'
import { infoController } from './controller'
import { renderSection } from '../common/utils'

export const renderInfo = (game: Game): HTMLElement => {
  const infoWrapper = renderSection('info main__info')

  const model = new InfoModel(game)
  const view = new InfoView(infoWrapper, model)
  infoController(model, view)

  return infoWrapper
}
