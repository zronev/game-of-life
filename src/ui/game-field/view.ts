import Field, { Grid } from '../../core/field'
import LayerFactory, { DrawerTypes, Layer } from './layer-factory'

import { Options } from '../../game'
import { Point } from '../../common/types'
import { Event } from '../../common/event'

type CanvasEvent = Event<Point>

class View {
  private _container: HTMLElement

  private _colonyLayer: Layer
  private _previewLayer: Layer
  private _gridLayer: Layer

  private _onAddPattern: CanvasEvent
  private _onPatternPreviewShow: CanvasEvent

  constructor(private _options: Options) {
    this._colonyLayer = LayerFactory.make(
      DrawerTypes.Colony,
      this._options,
      'colony-canvas'
    )

    this._gridLayer = LayerFactory.make(
      DrawerTypes.Grid,
      this._options,
      'grid-canvas'
    )

    this._previewLayer = LayerFactory.make(
      DrawerTypes.Preview,
      this._options,
      'preview-canvas'
    )

    this._onAddPattern = new Event()
    this._onPatternPreviewShow = new Event()

    this._container = this._buildContainer()
  }

  public createElement(): HTMLElement {
    this._container.addEventListener('click', e => {
      const position = this._getPositionOnCanvas(e, this._gridLayer)
      this._onAddPattern.trigger(position)
    })

    this._container.addEventListener('mousemove', e => {
      const position = this._getPositionOnCanvas(e, this._previewLayer)
      this._onPatternPreviewShow.trigger(position)
    })

    return this._container
  }

  public get onAddPattern(): CanvasEvent {
    return this._onAddPattern
  }

  public get onPatternPreviewShow(): CanvasEvent {
    return this._onPatternPreviewShow
  }

  public drawColonyLayer(field: Field): void {
    this._colonyLayer.drawer.clear()
    this._colonyLayer.drawer.draw(field)
  }

  public drawGridLayer(): void {
    this._gridLayer.drawer.clear()
    this._gridLayer.drawer.draw()
  }

  public drawPreviewLayer(pattern: Grid, position: Point): void {
    this._previewLayer.drawer.clear()
    this._previewLayer.drawer.draw(pattern, position)
  }

  private _buildContainer(): HTMLElement {
    const container = document.createElement('section')
    container.classList.add('game-wrapper', 'main__game')
    container.append(
      this._colonyLayer.canvas.element,
      this._previewLayer.canvas.element,
      this._gridLayer.canvas.element
    )

    return container
  }

  private _mapCoordinate(value: number, cellSize: number) {
    return Math.floor(value / cellSize)
  }

  private _getPositionOnCanvas(e: MouseEvent, layer: Layer): Point {
    const rect = layer.canvas.element.getBoundingClientRect()
    const scale = layer.canvas.element.width / rect.width

    const position: Point = {
      x: (e.clientX - rect.left) * scale,
      y: (e.clientY - rect.top) * scale,
    }

    const mappedPosition: Point = {
      x: this._mapCoordinate(position.x, layer.drawer.cellSize),
      y: this._mapCoordinate(position.y, layer.drawer.cellSize),
    }

    return mappedPosition
  }
}

export default View
