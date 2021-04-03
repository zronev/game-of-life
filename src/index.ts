import Canvas from './canvas/canvas'
import Game from './core/game'

const canvas = Canvas.getInstance()
canvas.setSize(800, 800)

const game = new Game()

game.spawn()

setInterval(() => {
  game.step()
}, 120)
