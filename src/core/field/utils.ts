import { Grid } from './types'
import { Point } from '../../common/types'
import { createMatrix } from '../../common/utils'

export const getEmptyGrid = (rows: number, columns: number): Grid => {
  return createMatrix(rows, columns, false)
}

export const getUsedCellsCount = (grid: Grid): number => {
  const countRow = (row: boolean[]) =>
    row.reduce((count, cell) => (cell ? count + 1 : count), 0)

  return grid.reduce((count, row) => count + countRow(row), 0)
}

export const getAvailableCells = (
  rows: number,
  columns: number,
  grid: Grid
): number => {
  const maxAmount = rows * columns
  const usedCellsCount = getUsedCellsCount(grid)

  return maxAmount - usedCellsCount
}

export const getDefaultAmount = (
  rows: number,
  columns: number,
  occupancyRate = 0.25
): number => {
  return Math.floor(rows * columns * occupancyRate)
}

export const countNeighbours = ({
  cell,
  rows,
  columns,
  grid,
}: {
  cell: Point
  rows: number
  columns: number
  grid: Grid
}): number => {
  let neighbours = 0
  const { x, y } = cell

  if (y > 0 && grid[y - 1][x]) neighbours++
  if (y > 0 && x > 0 && grid[y - 1][x - 1]) neighbours++
  if (y > 0 && x < columns - 1 && grid[y - 1][x + 1]) neighbours++
  if (x < columns - 1 && grid[y][x + 1]) neighbours++
  if (x > 0 && grid[y][x - 1]) neighbours++
  if (y < rows - 1 && grid[y + 1][x]) neighbours++
  if (y < rows - 1 && x > 0 && grid[y + 1][x - 1]) neighbours++
  if (y < rows - 1 && x < columns - 1 && grid[y + 1][x + 1]) neighbours++

  return neighbours
}
