import Game from '../core/game'
import Info from '../info/info'
import Button from '../ui/button'
import patterns from './data'

const createPatterns = (game: Game, info: Info) => {
  Object.entries(patterns).forEach(([key, pattern]) => {
    const patternSpawnButton = new Button('#patterns')

    patternSpawnButton.setTextContent(key)
    patternSpawnButton.onClick(() => {
      game.patternSpawn(pattern, { x: 50, y: 50 })
      info.updateCounters({ generation: false, population: true })
    })
  })
}

export default createPatterns