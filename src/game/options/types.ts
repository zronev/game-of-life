export type CellOptions = {
  color: string
}

export type GridOptions = {
  rows: number
  columns: number
}

export type CanvasOptions = {
  width: number
  height: number
}

export interface Options {
  canvas: CanvasOptions
  grid: GridOptions
  cell: CellOptions
}
