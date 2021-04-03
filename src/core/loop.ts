class Loop {
  private interval: number

  constructor(interval: number) {
    this.interval = interval
  }

  public start(fn: () => void) {
    setInterval(fn, this.interval)
  }
}

export default Loop
