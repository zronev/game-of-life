export type CellOptions = {
  color: string
}

export type CanvasOptions = {
  width: number
  height: number
}

export type GridOptions = {
  rows: number
  columns: number
}

export interface GameOptions {
  grid: GridOptions
  cell: CellOptions
  canvas: CanvasOptions
}

const createGameOptions = (options: GameOptions): GameOptions => options

const options = createGameOptions({
  canvas: {
    width: 800,
    height: 800,
  },
  grid: {
    rows: 100,
    columns: 100,
  },
  cell: {
    color: '#2d3436',
  },
})

export default options
