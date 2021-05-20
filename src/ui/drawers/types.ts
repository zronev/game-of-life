export type Cell = {
  x: number
  y: number
  side: number
  color?: string
}

export interface Drawer {
  draw(...args: any): void
  clear(): void
}
