import React from 'react'
import ReactDOM from 'react-dom'

import { Game } from '../core/game'
import { Options } from '../core/options'
import App from '../ui/components/App'

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

ReactDOM.render(
  <React.StrictMode>
    <App game={game} options={options} />
  </React.StrictMode>,
  document.getElementById('root')
)
