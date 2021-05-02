import Canvas from './canvas'
import UIElement from './element'
import Grid, { GridType } from '../../core/grid'
import { Drawer, createOptions, Options } from '../../game'

type PatternType = { name: string; grid: GridType }

class Pattern extends UIElement<HTMLDivElement> {
  constructor(pattern: PatternType, parentSelectors?: string, className = '') {
    super('div', parentSelectors, `pattern ${className}`)

    this.domElement.id = `pattern-${pattern.name}`

    const title = document.createElement('h3')
    title.textContent = pattern.name
    this.domElement.append(title)

    const options = this.getOptions()
    const canvas = new Canvas(options.canvas)

    const grid = new Grid(options.grid, pattern.grid)
    const drawer = new Drawer(options, canvas)
    drawer.update(grid)
  }

  private getOptions(): Options {
    return createOptions({
      canvas: {
        parentSelectors: '.pattern',
        width: 64,
        height: 64,
        className: 'pattern__canvas',
      },
      grid: { rows: 3, columns: 3 },
      cell: { color: '#2d3436' },
    })
  }
}

export default Pattern
