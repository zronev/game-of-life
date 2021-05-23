import Layer from './layer'
import CanvasView from '../game-field/canvas'
import { ColonyDrawer, GridDrawer, PreviewDrawer } from '../drawers'
import { Options } from '../../game'

export enum DrawerTypes {
  Colony = 'colony',
  Preview = 'preview',
  Grid = 'grid',
}

class LayerFactory {
  private static _drawers = {
    [DrawerTypes.Colony]: ColonyDrawer,
    [DrawerTypes.Preview]: PreviewDrawer,
    [DrawerTypes.Grid]: GridDrawer,
  }

  static make(
    drawerType: DrawerTypes,
    options: Options,
    className: string
  ): Layer {
    const canvas = new CanvasView(
      options.canvas.width,
      options.canvas.height,
      className
    )

    const drawer = new LayerFactory._drawers[drawerType](canvas, options)
    const layer = new Layer(canvas, drawer)

    return layer
  }
}

export default LayerFactory
