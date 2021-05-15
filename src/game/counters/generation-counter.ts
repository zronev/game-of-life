import Counter from './counter'

class GenerationCounter extends Counter {
  update(): void {
    this._count = this._count + 1
    this.notify()
  }
}

export default GenerationCounter
