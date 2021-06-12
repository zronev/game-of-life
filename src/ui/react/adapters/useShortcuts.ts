import { useEffect } from 'react'
import type { Game } from '../../../core/game'
import type { Options } from '../../../core/options'
import ShortcutsController from '../../common/shortcuts'

export const useShortcuts = (game: Game, options: Options): void => {
  const shortcuts = new ShortcutsController(game, options)

  useEffect(() => {
    shortcuts.init()
  }, [])
}
