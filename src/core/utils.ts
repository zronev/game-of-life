import { GameOptions, GridType } from './types'

export const countNeighbours = (
  x: number,
  y: number,
  grid: GridType,
  rows: number,
  columns: number
): number => {
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

export const createGameOptions = (options: GameOptions): GameOptions => options
