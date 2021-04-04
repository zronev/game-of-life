import Grid from './grid'

class GridService {
  constructor(private grid: Grid) {}

  public getAvailableCells(): number {
    const rows = this.grid.getRows()
    const columns = this.grid.getColumns()

    const maxAmount = rows * columns
    const usedCellsCount = this.getUsedCellsCount()

    return maxAmount - usedCellsCount
  }

  public getDefaultAmount(): number {
    const GRID_OCCUPANCY_RATE = 0.25
    const rows = this.grid.getRows()
    const columns = this.grid.getColumns()
    return Math.floor(rows * columns * GRID_OCCUPANCY_RATE)
  }

  public countNeighbours(x: number, y: number): number {
    const grid = this.grid.getGrid()
    const rows = this.grid.getRows()
    const columns = this.grid.getColumns()

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

  private getUsedCellsCount(): number {
    const grid = this.grid.getGrid()
    return grid.reduce(
      (count, col) =>
        count + col.reduce((count, cell) => (cell ? count + 1 : count), 0),
      0
    )
  }
}

export default GridService
