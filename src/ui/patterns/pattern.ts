import CanvasView from '../game-field/canvas'
import Field, { Grid } from '../../core/field'
import { ColonyDrawer, GridDrawer } from '../drawers'
import { createOptions } from '../../game'
import Spawners from '../../game/spawners'
import { fillGridWithAnotherGrid } from '../../common/utils'
import { Sides } from './data'

export const makePattern = (
  name: string,
  grid: Grid,
  spawners: Spawners,
  maxSides: Sides
): HTMLElement => {
  const container = document.createElement('div')
  container.classList.add('pattern')

  const title = document.createElement('h3')
  title.classList.add('pattern__title')
  title.textContent = name

  const canvas = makeCanvas(grid, maxSides)
  container.append(title, canvas)

  container.addEventListener('click', () => {
    spawners.patternSpawn(grid, { x: 40, y: 40 })
  })

  return container
}

const makeCanvas = (grid: Grid, maxSides: Sides): HTMLCanvasElement => {
  const options = createOptions({
    canvas: {
      width: maxSides.columns * 24,
      height: maxSides.rows * 24,
    },
    grid: maxSides,
    cell: {
      color: '#2d3436',
    },
  })

  const canvas = new CanvasView(
    options.canvas.width,
    options.canvas.height,
    'pattern__canvas'
  )

  const filledGrid = fillGridWithAnotherGrid(
    grid,
    maxSides.rows,
    maxSides.columns
  )

  const colonyDrawer = new ColonyDrawer(canvas, options)
  const gridDrawer = new GridDrawer(canvas, options)
  const field = new Field(options.grid, filledGrid)
  colonyDrawer.draw(field)
  gridDrawer.draw()

  return canvas.element
}
