import Game from '../../game'
import Info from '../info/info'
import Button from '../../components/button'
import patterns from './data'

const createPatterns = (game: Game, info: Info) => {
  Object.entries(patterns).forEach(([key, pattern]) => {
    const patternSpawnButton = new Button('#patterns')

    patternSpawnButton.setTextContent(key)
    patternSpawnButton.onClick(() => {
      game.patternSpawn(pattern, { x: 50, y: 50 })
      info.updatePopulationCounter()
    })
  })
}

export default createPatterns
