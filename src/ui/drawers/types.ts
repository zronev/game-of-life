export type Cell = {
  x: number
  y: number
  side: number
  color?: string
}

export interface Drawer {
  cellSize: number
  draw(...args: unknown[]): void
  clear(): void
}
