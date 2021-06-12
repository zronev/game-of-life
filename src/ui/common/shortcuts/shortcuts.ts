import type { Game } from '../../../core/game'
import type { Options } from '../../../core/options'

class ShortcutsController {
  static isKeysPressed: Record<string, boolean> = {
    KeyS: false,
    KeyC: false,
    BracketLeft: false,
    BracketRight: false,
    ShiftLeft: false,
    ShiftRight: false,
    Space: false,
    Digit1: false,
    Digit2: false,
    Digit3: false,
    Digit4: false,
  }

  constructor(private _game: Game, private _options: Options) {}

  public init(): void {
    this._onKeyDown()
    this._onKeyUp()
  }

  private _onKeyDown() {
    document.addEventListener('keydown', e => {
      ShortcutsController.isKeysPressed[e.code] = true

      const isShiftPressed =
        ShortcutsController.isKeysPressed.ShiftLeft ||
        ShortcutsController.isKeysPressed.ShiftRight

      if (ShortcutsController.isKeysPressed.Space) {
        e.preventDefault()
        this._game.loop.toggle()
      }

      if (ShortcutsController.isKeysPressed.KeyS) {
        this._game.spawners.randomSpawn()
      }

      if (ShortcutsController.isKeysPressed.KeyC) {
        this._game.clearField()
      }

      if (ShortcutsController.isKeysPressed.BracketLeft) {
        isShiftPressed
          ? this._game.loop.changeFpsBy(-1)
          : this._game.loop.changeFpsBy(-5)
      }

      if (ShortcutsController.isKeysPressed.BracketRight) {
        isShiftPressed
          ? this._game.loop.changeFpsBy(1)
          : this._game.loop.changeFpsBy(5)
      }

      if (ShortcutsController.isKeysPressed.Digit1) {
        this._options.changeFieldSides('small')
      }

      if (ShortcutsController.isKeysPressed.Digit2) {
        this._options.changeFieldSides('normal')
      }

      if (ShortcutsController.isKeysPressed.Digit3) {
        this._options.changeFieldSides('big')
      }

      if (ShortcutsController.isKeysPressed.Digit4) {
        this._options.changeFieldSides('large')
      }
    })
  }

  private _onKeyUp() {
    document.addEventListener('keyup', e => {
      ShortcutsController.isKeysPressed[e.code] = false
    })
  }
}

export default ShortcutsController
