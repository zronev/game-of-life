export type Cell = {
  x: number
  y: number
  side: number
}

export interface Drawer {
  cellSize: number
  draw(...args: unknown[]): void
  clear(): void
}
