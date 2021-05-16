import Game, { Options } from '../../game'
import CanvasView from './canvas'
import { ColonyDrawer, GridDrawer } from '../drawers'

const buildHelperGrid = (options: Options): HTMLElement => {
  const { width, height } = options.canvas
  const canvas = new CanvasView(width, height, 'grid-canvas')
  const drawer = new GridDrawer(canvas, options)
  drawer.draw()

  return canvas.element
}

const buildColonyGrid = (game: Game, options: Options): HTMLElement => {
  const { width, height } = options.canvas
  const canvas = new CanvasView(width, height, 'colony-canvas')
  const drawer = new ColonyDrawer(canvas, options)
  game.subscribeToField(drawer)

  return canvas.element
}

export const buildGameField = (game: Game, options: Options): HTMLElement => {
  const colonyGrid = buildColonyGrid(game, options)
  const helperGrid = buildHelperGrid(options)

  const container = document.createElement('section')
  container.classList.add('game-wrapper', 'main__game')
  container.append(colonyGrid, helperGrid)

  return container
}
