import { LayerView } from '../layer/view'
import { clear, Layer } from '../../../common/drawers'
import { positionOnElement } from '../../../react/layers'

import type { PreviewLayerState } from './types'
import { isEqualPoints } from '../../../react/layers/utility/is-equal-points'

export class PreviewLayerView extends LayerView<PreviewLayerState> {
  private _lastPosition: Point = { x: -1, y: -1 }

  public onMouseMove(callback: (layer: Layer, position: Point) => void): void {
    const handleMouseMove = (event: MouseEvent) => {
      if (!this._layer) return

      const position = positionOnElement({
        event,
        cellSize: this._layer.cellSize,
        element: this._canvas,
        targetElementWidth: this._canvas.width,
      })

      if (isEqualPoints(this._lastPosition, position)) return

      this._lastPosition = position
      callback(this._layer, position)
    }

    this._canvas.addEventListener('mousemove', handleMouseMove)
  }

  public onMouseLeave(callback: (layer: Layer) => void): void {
    const handleMouseLeave = () => {
      if (this._layer) callback(this._layer)
    }

    this._canvas.addEventListener('mouseleave', handleMouseLeave)
  }

  public clear(): void {
    if (this._layer) clear(this._layer)
  }
}
