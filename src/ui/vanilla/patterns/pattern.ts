import type { Game } from '../../../core/game'
import type { Pattern } from '../../../patterns'

import { Options } from '../../../core/options'
import { renderGridLayer } from '../layers/grid'
import { renderColonyLayer } from '../layers/colony'

import {
  CELL_COLOR,
  CELL_SIZE,
  GRID_COLOR,
} from '../../common/patterns/constant'
import { clear, drawColony, Layer } from '../../common/drawers'
import { renderCanvas, renderParagraph, renderWrapper } from '../common/utility'

export const renderPattern = (pattern: Pattern, game: Game): HTMLElement => {
  const options = new Options({
    fieldSides: {
      rows: pattern.grid.rows,
      columns: pattern.grid.columns,
    },
    canvasSize: {
      width: pattern.grid.columns * CELL_SIZE,
      height: pattern.grid.rows * CELL_SIZE,
    },
    cellSize: CELL_SIZE,
    color: CELL_COLOR,
  }).toMap()

  const draw = (layer: Layer) => {
    clear(layer)
    drawColony(pattern.grid, layer)
  }

  const gridOptions = {
    ...options,
    color: GRID_COLOR,
  }

  const { canvasSize } = options

  const colonyCanvas = renderCanvas(canvasSize, 'colony-canvas pattern__canvas')
  const colonyLayer = renderColonyLayer(colonyCanvas, game, options, draw)

  const gridCanvas = renderCanvas(canvasSize, 'grid-canvas pattern__canvas')
  const gridLayer = renderGridLayer(gridCanvas, game, gridOptions)

  const name = renderParagraph(pattern.name, 'pattern__name')

  const layersWrapper = renderWrapper('div', 'relative-wrapper')
  layersWrapper.append(colonyLayer, gridLayer)

  const patternWrapper = renderWrapper('div', 'pattern')
  patternWrapper.append(layersWrapper, name)
  patternWrapper.dataset.name = pattern.name

  return patternWrapper
}
