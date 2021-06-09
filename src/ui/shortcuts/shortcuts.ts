import type { Game, Options } from '../../game'

class ShortcutsController {
  static isKeysPressed: Record<string, boolean> = {
    s: false,
    c: false,
    '[': false,
    ']': false,
    '{': false,
    '}': false,
    ' ': false,
    '1': false,
    '2': false,
    '3': false,
    '4': false,
  }

  constructor(private _game: Game, private _options: Options) {}

  public init(): void {
    this._onKeyDown()
    this._onKeyUp()
  }

  private _onKeyDown() {
    document.addEventListener('keydown', e => {
      ShortcutsController.isKeysPressed[e.key] = true

      if (ShortcutsController.isKeysPressed[' ']) {
        e.preventDefault()
        this._game.loop.toggle()
      }

      if (ShortcutsController.isKeysPressed['s']) {
        this._game.spawners.randomSpawn()
      }

      if (ShortcutsController.isKeysPressed['c']) {
        this._game.clearField()
      }

      if (ShortcutsController.isKeysPressed['[']) {
        this._game.loop.changeFpsBy(-5)
      }

      if (ShortcutsController.isKeysPressed[']']) {
        this._game.loop.changeFpsBy(5)
      }

      if (ShortcutsController.isKeysPressed['{']) {
        this._game.loop.changeFpsBy(-1)
      }

      if (ShortcutsController.isKeysPressed['}']) {
        this._game.loop.changeFpsBy(1)
      }

      if (ShortcutsController.isKeysPressed['1']) {
        this._options.changeFieldSides('small')
      }

      if (ShortcutsController.isKeysPressed['2']) {
        this._options.changeFieldSides('normal')
      }

      if (ShortcutsController.isKeysPressed['3']) {
        this._options.changeFieldSides('big')
      }

      if (ShortcutsController.isKeysPressed['4']) {
        this._options.changeFieldSides('large')
      }
    })
  }

  private _onKeyUp() {
    document.addEventListener('keyup', e => {
      ShortcutsController.isKeysPressed[e.key] = false
    })
  }
}

export default ShortcutsController
