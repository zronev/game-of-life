import type { OptionsMap } from '../../../../core/options'

import { LayerView } from '../layer/view'
import { clear, drawGrid } from '../../../common/drawers'

export class GridLayerView extends LayerView {
  public draw(options: OptionsMap): void {
    if (this._layer) {
      clear(this._layer)
      drawGrid(this._layer, options)
    }
  }
}
