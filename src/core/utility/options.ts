export type CellOptions = {
  color: string
}

export type GridOptions = {
  rows: number
  columns: number
}

export type CanvasOptions = {
  parentSelectors: string
  width: number
  height: number
  className?: string
}

export interface GameOptions {
  canvas: CanvasOptions
  grid: GridOptions
  cell: CellOptions
}

const createGameOptions = (options: GameOptions): GameOptions => options

const options = createGameOptions({
  canvas: {
    parentSelectors: '#game',
    width: 600,
    height: 600,
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
