import type { ControlsView } from './view'
import type { ControlsModel } from './model'

export class ControlsController {
  constructor(model: ControlsModel, view: ControlsView) {
    view.render(model.state)
    model.eventEmitter.addListener('MODEL_CHANGED', view.prepareRender)
    this._subscribeToViewEvents(model, view)
  }

  private _subscribeToViewEvents(model: ControlsModel, view: ControlsView) {
    const { game, options } = model.state
    const eventsHandler: Record<string, () => void> = {
      spawn: () => game.spawners.randomSpawn(),
      clear: () => game.clearField(),
      playback: () => game.loop.toggle(),
      faster: () => game.loop.changeFpsBy(5),
      slower: () => game.loop.changeFpsBy(-5),
      small: () => options.changeFieldSides('small'),
      normal: () => options.changeFieldSides('normal'),
      large: () => options.changeFieldSides('large'),
      big: () => options.changeFieldSides('big'),
    }

    view.onClick(name => eventsHandler[name]())
  }
}
