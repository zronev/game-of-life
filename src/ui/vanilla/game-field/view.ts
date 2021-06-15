import type { Grid } from '../../../core/grid'
import type { Layer } from '../../common/layers'
import type { GridHandler } from '../layers/colony/types'
import type { GameFieldState, MouseEventCallback } from './types'

import { View } from '../common/mvc'
import { renderCanvas } from '../common/utils'
import { clear, drawColony } from '../../common/drawers'

import { renderGridLayer } from '../layers/grid'
import { renderColonyLayer } from '../layers/colony'
import { renderPreviewLayer } from '../layers/preview'
import { PREVIEW_COLOR } from '../../common/layers/constant'

export class GameFieldView extends View<GameFieldState> {
  private _isDrawing = false

  public override render(state: GameFieldState): DocumentFragment {
    const fragment = document.createDocumentFragment()

    const colonyLayer = this._renderColonyLayer(state)
    const gridLayer = this._renderGridLayer(state)
    const previewLayer = this._renderPreviewLayer(state)

    this._subscribeToMouseEvents()

    fragment.append(colonyLayer, gridLayer, previewLayer)
    return fragment
  }

  public get isDrawing(): boolean {
    return this._isDrawing
  }

  public onClick(callback: MouseEventCallback): void {
    this._targetElement.addEventListener('click', event =>
      callback(event, this._targetElement)
    )
  }

  public onMouseMove(callback: MouseEventCallback): void {
    this._targetElement.addEventListener('mousemove', event =>
      callback(event, this._targetElement)
    )
  }

  private _subscribeToMouseEvents() {
    this._targetElement.addEventListener('mousedown', () => {
      this._isDrawing = true
    })

    this._targetElement.addEventListener('mouseup', () => {
      this._isDrawing = false
    })
  }

  private _renderColonyLayer({
    game,
    options,
  }: GameFieldState): HTMLCanvasElement {
    const onGridChanged = (callback: GridHandler) => {
      const field = game.getEmitter('field')
      field.addListener('GRID_CHANGED', callback)
    }

    const colonyCanvas = renderCanvas(options.canvasSize, 'colony-canvas')
    return renderColonyLayer(
      colonyCanvas,
      game,
      options,
      this._drawColony,
      onGridChanged
    )
  }

  private _renderGridLayer({
    game,
    options,
  }: GameFieldState): HTMLCanvasElement {
    const gridCanvas = renderCanvas(options.canvasSize, 'grid-canvas')
    return renderGridLayer(gridCanvas, game, options)
  }

  private _renderPreviewLayer({
    game,
    options,
    patternToSpawn,
  }: GameFieldState): HTMLCanvasElement {
    const previewOptions = { ...options.toMap(), color: PREVIEW_COLOR }
    const previewCanvas = renderCanvas(options.canvasSize, 'preview-canvas')
    return renderPreviewLayer(
      previewCanvas,
      game,
      previewOptions,
      patternToSpawn
    )
  }

  private _drawColony(layer: Layer, grid: Grid): void {
    clear(layer)
    drawColony(grid, layer)
  }
}
