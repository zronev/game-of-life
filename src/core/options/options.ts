import type { Sides } from '../grid'
import type { Size } from './types'
import { Emitter } from '../event-emitter'
import { FieldSide, FIELD_SIDES } from './constants'

type OptionsEvents = {
  FIELD_SIDES_CHANGED: OptionsMap
}

type OptionsProps = {
  fieldSides: Sides
  canvasSize: Size
  color: string
  cellSize?: number
}

export type OptionsMap = {
  eventEmitter: Emitter<OptionsEvents>
} & Required<OptionsProps>

export class Options {
  private _fieldSides: Sides
  private _canvasSize: Size
  private _color: string
  private _cellSize: number
  private _eventEmitter: Emitter<OptionsEvents>

  constructor({ fieldSides, canvasSize, cellSize, color }: OptionsProps) {
    this._fieldSides = fieldSides
    this._canvasSize = canvasSize
    this._color = color
    this._cellSize = cellSize ?? this._getCellSize()
    this._eventEmitter = new Emitter()
  }

  public get eventEmitter(): Emitter<OptionsEvents> {
    return this._eventEmitter
  }

  public get fieldSides(): Sides {
    return this._fieldSides
  }

  public set fieldSides(newFieldSides: Sides) {
    this._fieldSides = newFieldSides
    this._cellSize = this._getCellSize()
    this._eventEmitter.dispatch('FIELD_SIDES_CHANGED', this.toMap())
  }

  public get canvasSize(): Size {
    return this._canvasSize
  }

  public get cellSize(): number {
    return this._cellSize
  }

  public get color(): string {
    return this._color
  }

  public set color(newColor: string) {
    this._color = newColor
  }

  public toMap(): OptionsMap {
    return {
      fieldSides: this.fieldSides,
      canvasSize: this.canvasSize,
      cellSize: this.cellSize,
      color: this.color,
      eventEmitter: this.eventEmitter,
    }
  }

  public changeFieldSides(side: FieldSide): void {
    this.fieldSides = {
      rows: FIELD_SIDES[side],
      columns: FIELD_SIDES[side],
    }
  }

  private _getCellSize(): number {
    return Math.floor(this._canvasSize.width / this._fieldSides.columns)
  }
}
