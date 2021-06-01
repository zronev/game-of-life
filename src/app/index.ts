import { app } from '../ui/app'
import { createOptions } from '../game'

const options = createOptions({
  canvas: {
    width: 1000,
    height: 1000,
  },
  grid: {
    rows: 50,
    columns: 50,
  },
  cell: {
    color: '#2d3436',
  },
})

app(options)
