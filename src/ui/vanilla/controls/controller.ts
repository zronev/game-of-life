import type { ControlsView } from './view'
import type { ControlsModel } from './model'

const subscribeToViewEvents = (model: ControlsModel, view: ControlsView) => {
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

export const controlsController = (
  model: ControlsModel,
  view: ControlsView
): void => {
  view.render(model.state)
  model.eventEmitter.addListener('MODEL_CHANGED', view.prepareRender)
  subscribeToViewEvents(model, view)
}
