import { Grid, Sides } from './types'

export const getRandomValue = (min: number, max: number): number => {
  const ceiledMin = Math.ceil(min)
  const flooredMax = Math.floor(max)
  return Math.floor(Math.random() * (flooredMax - ceiledMin + 1)) + ceiledMin
}

export const arrayClone = <T>(arr: T[]): T[] => {
  return JSON.parse(JSON.stringify(arr))
}

export const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(value, max))
}

export const createGrid = <T>(
  rows: number,
  columns: number,
  value?: T
): Grid<T> => {
  return Array<T[]>(rows)
    .fill([])
    .map(() => Array(columns).fill(value))
}

export const fillGridWithAnotherGrid = <T>(
  grid: Grid<T>,
  rows: number,
  columns: number
): Grid<T> => {
  const newGrid = createGrid<T>(rows, columns)

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const cellValue = grid?.[y]?.[x]
      newGrid[y][x] = cellValue
    }
  }

  return newGrid
}

export const getMaxSides = (grids: Grid<unknown>[]): Sides => {
  return grids.reduce(
    (acc, grid) => {
      const rows = grid.length
      const columns = grid[0].length

      return {
        rows: rows > acc.rows ? rows : acc.rows,
        columns: columns > acc.columns ? columns : acc.columns,
      }
    },
    { rows: -Infinity, columns: -Infinity }
  )
}
