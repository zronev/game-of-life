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

export interface Options {
  canvas: CanvasOptions
  grid: GridOptions
  cell: CellOptions
}

export const createOptions = (options: Options): Options => options
