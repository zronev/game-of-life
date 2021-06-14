import type { Cells, Grid, Sides } from '../types'

export const createCells = ({ rows, columns }: Sides): Cells => {
  return Array(rows)
    .fill([])
    .map(() => Array(columns).fill(false))
}

export const getMaxSides = (cells: Cells): Sides => {
  const maxColumns = cells.reduce((acc, cur) => Math.max(cur.length, acc), 0)

  return { rows: cells.length, columns: maxColumns }
}

export const getUsedCells = (grid: Grid): number => {
  const { rows, columns, cells } = grid
  let count = 0

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const isCellAlive = cells[y][x]
      count = isCellAlive ? count + 1 : count
    }
  }

  return count
}

export const getAvailableCells = (grid: Grid): number => {
  const maxAmount = grid.rows * grid.columns
  const usedCells = getUsedCells(grid)

  return maxAmount - usedCells
}

export const fillCells = (cells: Cells, sides: Sides): Cells => {
  const { rows, columns } = sides
  const newCells = createCells(sides)

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const isCellAlive = cells[y]?.[x] ?? false
      newCells[y][x] = isCellAlive
    }
  }

  return newCells
}

export const getDefaultAmount = (grid: Grid, occupancyRate = 0.15): number => {
  const { rows, columns } = grid
  return Math.floor(rows * columns * occupancyRate)
}

export const countNeighbours = (cells: Cells, x: number, y: number): number => {
  let neighbours = 0

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const isOriginalCell = i === 0 && j === 0
      if (isOriginalCell) continue

      const isCellAlive = cells[y + i]?.[x + j]
      if (isCellAlive) neighbours++
    }
  }

  return neighbours
}
