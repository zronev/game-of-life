import Grid from '../grid/grid'

abstract class Spawner {
  constructor(protected grid: Grid) {}

  public abstract spawn(...args: any): void
}

export default Spawner
