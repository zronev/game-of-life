import { Game } from '../../core/game'
import { Options } from '../../core/options'
import { app } from '../../ui/vanilla/app'

const options = new Options({
  fieldSides: {
    rows: 50,
    columns: 50,
  },
  canvasSize: {
    width: 1000,
    height: 1000,
  },
  color: '#2d3436',
})

const game = new Game(options.fieldSides)

app(game, options)
