import { Spawners } from '../spawner'
import { applyClassicRules } from '../rules'
import { Loop, LoopEventMap } from '../loop'
import { Field, FieldEventMap } from '../field'
import { Generation, GenerationEventMap } from '../generation'
import { fillCells, GridFromCells, GridFromOptions, Sides } from '../grid'

import type { Emitter } from '../event-emitter'

type EventsMaps = {
  loop: LoopEventMap
  field: FieldEventMap
  generation: GenerationEventMap
}

type EmittersMap = {
  [K in keyof EventsMaps]: Emitter<EventsMaps[K]>
}

export class Game {
  private _loop: Loop
  private _field: Field
  private _spawners: Spawners
  private _generation: Generation
  private _eventEmitters: EmittersMap

  constructor(fieldSides: Sides) {
    this._field = new Field(new GridFromOptions(fieldSides))
    this._generation = new Generation(this._field, applyClassicRules)
    this._spawners = new Spawners(this._field)
    this._loop = new Loop(30, () => this.step())

    this._eventEmitters = {
      loop: this._loop.eventEmitter,
      field: this._field.eventEmitter,
      generation: this._generation.eventEmitter,
    }
  }

  public step(): void {
    this._generation.next()
  }

  public get loop(): Loop {
    return this._loop
  }

  public get spawners(): Spawners {
    return this._spawners
  }

  public changeFieldSize(sides: Sides): void {
    const newCells = fillCells(this._field.grid.cells, sides)
    this._field.grid = new GridFromCells(newCells)
  }

  public clearField(): void {
    this._field.clear()
  }

  public getEmitter<T extends keyof EventsMaps>(
    emitterName: T
  ): EmittersMap[T] {
    return this._eventEmitters[emitterName]
  }
}
