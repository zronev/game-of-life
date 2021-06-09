export type Cells = boolean[][]

export interface Grid {
  rows: number
  columns: number
  cells: Cells
}

export type Sides = {
  rows: number
  columns: number
}
