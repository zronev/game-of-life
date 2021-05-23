import Game from '../game'

class ShortcutsController {
  static isKeysPressed: Record<string, boolean> = {
    p: false,
    s: false,
    c: false,
    '[': false,
    ']': false,
    '{': false,
    '}': false,
  }

  constructor(private _game: Game) {}

  public init(): void {
    this._onKeyDown()
    this._onKeyUp()
  }

  private _onKeyDown() {
    document.onkeydown = e => {
      ShortcutsController.isKeysPressed[e.key] = true

      if (ShortcutsController.isKeysPressed['p']) {
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
        this._game.loop.changeFpsBy(-10)
      }

      if (ShortcutsController.isKeysPressed['}']) {
        this._game.loop.changeFpsBy(10)
      }
    }
  }

  private _onKeyUp() {
    document.onkeyup = e => {
      ShortcutsController.isKeysPressed[e.key] = false
    }
  }
}

export default ShortcutsController
