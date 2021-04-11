import Grid from '../grid/grid'
import { createMatrix } from '../../common/utils'

class GridService {
  constructor(private gridInstance: Grid) {}

  public clearGrid() {
    const { rows, columns } = this.gridInstance
    const emptyGrid = createMatrix(rows, columns, false)
    this.gridInstance.grid = emptyGrid
  }

  public getAvailableCells(): number {
    const { rows, columns } = this.gridInstance
    const maxAmount = rows * columns
    const usedCellsCount = this.getUsedCellsCount()

    return maxAmount - usedCellsCount
  }

  public getDefaultAmount(): number {
    const GRID_OCCUPANCY_RATE = 0.25
    const { rows, columns } = this.gridInstance
    return Math.floor(rows * columns * GRID_OCCUPANCY_RATE)
  }

  public countNeighbours(x: number, y: number): number {
    const { grid, rows, columns } = this.gridInstance

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

  public getUsedCellsCount(): number {
    const { grid } = this.gridInstance
    return grid.reduce(
      (count, col) =>
        count + col.reduce((count, cell) => (cell ? count + 1 : count), 0),
      0
    )
  }
}

export default GridService
