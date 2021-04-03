export type GridType = boolean[][]

export type RulesState = 'alive' | 'dead' | 'skip'

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
