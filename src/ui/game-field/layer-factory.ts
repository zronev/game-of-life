import CanvasView from './canvas'
import { ColonyDrawer, GridDrawer, PreviewDrawer } from '../drawers'
import { Options } from '../../game'
import { Drawer } from '../drawers/types'

export type Layer = {
  canvas: CanvasView
  drawer: Drawer
}

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

    return {
      canvas,
      drawer,
    }
  }
}

export default LayerFactory
