import Field from './field'
import { Grid } from './types'
import { createMatrix } from '../../common/utils'

export const getEmptyGrid = (field: Field): Grid => {
  const { rows, columns } = field
  const emptyGrid = createMatrix(rows, columns, false)
  return emptyGrid
}

export const getUsedCells = (field: Field): number => {
  const { grid } = field
  const countRow = (row: boolean[]) =>
    row.reduce((count, cell) => (cell ? count + 1 : count), 0)

  return grid.reduce((count, row) => count + countRow(row), 0)
}

export const getAvailableCells = (field: Field): number => {
  const { rows, columns } = field
  const maxAmount = rows * columns
  const usedCellsCount = getUsedCells(field)

  return maxAmount - usedCellsCount
}

export const getDefaultAmount = (field: Field): number => {
  const { rows, columns } = field
  const GRID_OCCUPANCY_RATE = 0.25
  return Math.floor(rows * columns * GRID_OCCUPANCY_RATE)
}

export const countNeighbours = (field: Field, x: number, y: number): number => {
  const { grid, rows, columns } = field

  let neighbours = 0

  if (y > 0 && grid[y - 1][x]) {
    neighbours++
  }
  if (y > 0 && x > 0 && grid[y - 1][x - 1]) {
    neighbours++
  }
  if (y > 0 && x < columns - 1 && grid[y - 1][x + 1]) {
    neighbours++
  }
  if (x < columns - 1 && grid[y][x + 1]) {
    neighbours++
  }
  if (x > 0 && grid[y][x - 1]) {
    neighbours++
  }
  if (y < rows - 1 && grid[y + 1][x]) {
    neighbours++
  }
  if (y < rows - 1 && x > 0 && grid[y + 1][x - 1]) {
    neighbours++
  }
  if (y < rows - 1 && x < columns - 1 && grid[y + 1][x + 1]) {
    neighbours++
  }

  return neighbours
}
