export type Cell = {
  x: number
  y: number
  side: number
}

export type Layer = {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  cellSize: number
}
