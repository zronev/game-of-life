import Grid from './grid'
import { GridType } from './types'
import { createMatrix } from '../../common/utils'

export const clearGrid = (gridInstance: Grid): GridType => {
  const { rows, columns } = gridInstance
  const emptyGrid = createMatrix(rows, columns, false)
  return emptyGrid
}

export const getUsedCellsCount = (gridInstance: Grid): number => {
  const { grid } = gridInstance
  const countRow = (row: boolean[]) =>
    row.reduce((count, cell) => (cell ? count + 1 : count), 0)

  return grid.reduce((count, row) => count + countRow(row), 0)
}

export const getAvailableCells = (gridInstance: Grid): number => {
  const { rows, columns } = gridInstance
  const maxAmount = rows * columns
  const usedCellsCount = getUsedCellsCount(gridInstance)

  return maxAmount - usedCellsCount
}

export const getDefaultAmount = (gridInstance: Grid): number => {
  const { rows, columns } = gridInstance
  const GRID_OCCUPANCY_RATE = 0.25
  return Math.floor(rows * columns * GRID_OCCUPANCY_RATE)
}

export const countNeighbours = (
  gridInstance: Grid,
  x: number,
  y: number
): number => {
  const { grid, rows, columns } = gridInstance

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
