import app from '../ui/app'
import { createOptions } from '../game'

const options = createOptions({
  canvas: {
    parentSelectors: '#game',
    width: 600,
    height: 600,
  },
  grid: {
    rows: 75,
    columns: 75,
  },
  cell: {
    color: '#2d3436',
  },
})

app(options)
