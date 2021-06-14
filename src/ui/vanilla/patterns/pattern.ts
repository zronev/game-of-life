import type { Game } from '../../../core/game'
import type { Pattern } from '../../../patterns'
import type { Layer } from '../../common/layers'

import { Options, OptionsMap } from '../../../core/options'
import { renderGridLayer } from '../layers/grid'
import { renderColonyLayer } from '../layers/colony'

import {
  CELL_COLOR,
  CELL_SIZE,
  GRID_COLOR,
} from '../../common/patterns/constant'
import { clear, drawColony } from '../../common/drawers'
import { renderCanvas, renderParagraph, renderWrapper } from '../common/utility'

const renderColony = (game: Game, options: OptionsMap, pattern: Pattern) => {
  const { canvasSize } = options

  const draw = (layer: Layer) => {
    clear(layer)
    drawColony(pattern.grid, layer)
  }

  const colonyCanvas = renderCanvas(canvasSize, 'colony-canvas pattern__canvas')
  return renderColonyLayer(colonyCanvas, game, options, draw)
}

const renderGrid = (game: Game, options: OptionsMap) => {
  const gridOptions = { ...options, color: GRID_COLOR }
  const { canvasSize } = options

  const gridCanvas = renderCanvas(canvasSize, 'grid-canvas pattern__canvas')
  return renderGridLayer(gridCanvas, game, gridOptions)
}

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

  const colonyLayer = renderColony(game, options, pattern)
  const gridLayer = renderGrid(game, options)
  const layersWrapper = renderWrapper('div', 'relative-wrapper')
  layersWrapper.append(colonyLayer, gridLayer)

  const name = renderParagraph(pattern.name, 'pattern__name')
  const patternWrapper = renderWrapper('div', 'pattern')
  patternWrapper.append(layersWrapper, name)
  patternWrapper.dataset.name = pattern.name

  return patternWrapper
}
