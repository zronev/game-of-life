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

const options = createOptions({
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
