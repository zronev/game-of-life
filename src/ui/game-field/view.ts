import { getPositionOnCanvas } from './position-on-canvas'
import { Layer, LayerFactory, DrawerTypes } from '../layers'
import { Options } from '../../game'
import { Point } from '../../common/types'
import { Event } from '../../common/event'

type PositionEvent = Event<Point>

class View {
  private _container: HTMLElement

  private _colonyLayer: Layer
  private _gridLayer: Layer
  private _previewLayer: Layer

  private _onMouseClick: PositionEvent
  private _onMouseOver: PositionEvent
  private _onMouseLeave: Event

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

    this._onMouseClick = new Event()
    this._onMouseOver = new Event()
    this._onMouseLeave = new Event()

    this._container = this._buildContainer()
  }

  public createElement(): HTMLElement {
    this._container.addEventListener('click', e => {
      const position = getPositionOnCanvas(e, this._gridLayer)
      this._onMouseClick.trigger(position)
    })

    this._container.addEventListener('mousemove', e => {
      const position = getPositionOnCanvas(e, this._previewLayer)
      this._onMouseOver.trigger(position)
    })

    this._container.addEventListener('mouseleave', () => {
      this._onMouseLeave.trigger({})
    })

    return this._container
  }

  public get onMouseClick(): PositionEvent {
    return this._onMouseClick
  }

  public get onMouseOver(): PositionEvent {
    return this._onMouseOver
  }

  public get onMouseLeave(): Event {
    return this._onMouseLeave
  }

  public get colonyLayer(): Layer {
    return this._colonyLayer
  }

  public get gridLayer(): Layer {
    return this._gridLayer
  }

  public get previewLayer(): Layer {
    return this._previewLayer
  }

  private _buildContainer(): HTMLElement {
    const container = document.createElement('section')
    container.classList.add('game-wrapper', 'main__game')
    container.append(
      this._colonyLayer.canvasElement,
      this._gridLayer.canvasElement,
      this._previewLayer.canvasElement
    )

    return container
  }
}

export default View
