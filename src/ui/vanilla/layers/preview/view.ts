import type { PreviewLayerState } from './types'
import type { Layer } from '../../../common/layers'
import type { PatternToSpawn } from '../../patterns/pattern-to-spawn'

import { LayerView } from '../layer/view'
import { clear } from '../../../common/drawers'
import { drawPreviewOnMouseMove } from '../../../common/layers/draw-preview'

export class PreviewLayerView extends LayerView<PreviewLayerState> {
  private _lastPosition: Point = { x: -1, y: -1 }

  public onMouseMove(pattern: PatternToSpawn): void {
    const handleMouseMove = (event: MouseEvent) => {
      drawPreviewOnMouseMove(
        event,
        this._layer,
        this._lastPosition,
        pattern.get()
      )
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
