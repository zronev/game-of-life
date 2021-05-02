import Grid from '../grid'

abstract class Spawner {
  constructor(protected gridInstance: Grid) {}

  public abstract spawn(...args: any): void
}

export default Spawner
