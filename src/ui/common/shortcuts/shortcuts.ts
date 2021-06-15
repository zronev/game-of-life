import type { Game } from '../../../core/game'
import type { Options } from '../../../core/options'

class Shortcuts {
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
      Shortcuts.isKeysPressed[e.code] = true

      const isShiftPressed =
        Shortcuts.isKeysPressed.ShiftLeft ||
        Shortcuts.isKeysPressed.ShiftRight

      if (Shortcuts.isKeysPressed.Space) {
        e.preventDefault()
        this._game.loop.toggle()
      }

      if (Shortcuts.isKeysPressed.KeyS) {
        this._game.spawners.randomSpawn()
      }

      if (Shortcuts.isKeysPressed.KeyC) {
        this._game.clearField()
      }

      if (Shortcuts.isKeysPressed.BracketLeft) {
        isShiftPressed
          ? this._game.loop.changeFpsBy(-1)
          : this._game.loop.changeFpsBy(-5)
      }

      if (Shortcuts.isKeysPressed.BracketRight) {
        isShiftPressed
          ? this._game.loop.changeFpsBy(1)
          : this._game.loop.changeFpsBy(5)
      }

      if (Shortcuts.isKeysPressed.Digit1) {
        this._options.changeFieldSides('small')
      }

      if (Shortcuts.isKeysPressed.Digit2) {
        this._options.changeFieldSides('normal')
      }

      if (Shortcuts.isKeysPressed.Digit3) {
        this._options.changeFieldSides('big')
      }

      if (Shortcuts.isKeysPressed.Digit4) {
        this._options.changeFieldSides('large')
      }
    })
  }

  private _onKeyUp() {
    document.addEventListener('keyup', e => {
      Shortcuts.isKeysPressed[e.code] = false
    })
  }
}

export default Shortcuts
