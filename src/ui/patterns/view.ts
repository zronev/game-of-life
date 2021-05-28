import { flattenedPatterns } from './data'
import Field, { Grid } from '../../core/field'
import { DrawerTypes, LayerFactory } from '../layers'
import { createOptions } from '../../game'

import { Sides } from '../../common/types'
import { fillGridWithAnotherGrid, getMaxSides } from '../../common/utils'

class View {
  private _container: HTMLElement
  private _patterns: HTMLElement[]

  constructor() {
    const maxSides = getMaxSides(Object.values(flattenedPatterns))

    this._patterns = Object.entries(flattenedPatterns).map(([name, grid]) =>
      this._buildPattern(name, grid, maxSides)
    )

    this._container = this._buildContainer()
  }

  public createElement(): HTMLElement {
    return this._container
  }

  private _buildContainer(): HTMLElement {
    const container = document.createElement('section')
    container.classList.add('patterns', 'main__patterns')
    container.append(...this._patterns)

    container.addEventListener('click', (e: MouseEvent) => {
      const id = e
    })

    return container
  }

  private _buildPattern(
    name: string,
    grid: Grid,
    maxSides: Sides
  ): HTMLElement {
    const title = document.createElement('h3')
    title.classList.add('pattern__title')
    title.textContent = name

    const canvasesWrapper = document.createElement('div')
    canvasesWrapper.classList.add('pattern__canvases-wrapper')

    const canvases = this._buildCanvas(grid, maxSides)
    canvasesWrapper.append(...canvases)

    const patternContainer = document.createElement('div')
    patternContainer.id = name
    patternContainer.classList.add('pattern')
    patternContainer.append(canvasesWrapper, title)

    return patternContainer
  }

  private _buildCanvas(grid: Grid, maxSides: Sides): HTMLCanvasElement[] {
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

    const colonyLayer = LayerFactory.make(
      DrawerTypes.Colony,
      options,
      'pattern__canvas pattern__canvas--canvas'
    )

    const gridLayer = LayerFactory.make(
      DrawerTypes.Grid,
      options,
      'pattern__canvas pattern__canvas--grid'
    )

    const filledGrid = fillGridWithAnotherGrid(
      grid,
      maxSides.rows,
      maxSides.columns
    )

    const field = new Field(options.grid, filledGrid)
    colonyLayer.drawer.draw(field)
    gridLayer.drawer.draw()

    return [colonyLayer.canvasElement, gridLayer.canvasElement]
  }
}

export default View
