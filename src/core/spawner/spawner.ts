import type Field from '../field'

abstract class Spawner {
  constructor(protected _field: Field) {}

  public abstract spawn(...args: unknown[]): void
}

export default Spawner
