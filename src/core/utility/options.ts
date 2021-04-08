export type CellOptions = {
  color: string
}

export type GridOptions = {
  rows: number
  columns: number
}

export interface GameOptions {
  grid: GridOptions
  cell: CellOptions
}

const createGameOptions = (options: GameOptions): GameOptions => options

const options = createGameOptions({
  grid: {
    rows: 100,
    columns: 100,
  },
  cell: {
    color: '#2d3436',
  },
})

export default options
