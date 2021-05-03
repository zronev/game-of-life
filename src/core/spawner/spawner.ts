import Field from '../field'

abstract class Spawner {
  constructor(protected _field: Field) {}

  public abstract spawn(...args: any): void
}

export default Spawner
