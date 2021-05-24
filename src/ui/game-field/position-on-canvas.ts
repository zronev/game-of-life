import { Layer } from '../layers'
import { Point } from '../../common/types'

const mapCoordinate = (value: number, cellSize: number): number => {
  return Math.floor(value / cellSize)
}

export const getPositionOnCanvas = (e: MouseEvent, layer: Layer): Point => {
  const rect = layer.canvasElement.getBoundingClientRect()
  const scale = layer.width / rect.width

  const position: Point = {
    x: (e.clientX - rect.left) * scale,
    y: (e.clientY - rect.top) * scale,
  }

  const mappedPosition: Point = {
    x: mapCoordinate(position.x, layer.cellSize),
    y: mapCoordinate(position.y, layer.cellSize),
  }

  return mappedPosition
}
