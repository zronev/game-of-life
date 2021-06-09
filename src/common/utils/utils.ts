export const getRandomValue = (min: number, max: number): number => {
  const ceiledMin = Math.ceil(min)
  const flooredMax = Math.floor(max)
  return Math.floor(Math.random() * (flooredMax - ceiledMin + 1)) + ceiledMin
}

export const clone2DArray = <T>(arr: T[][]): T[][] => {
  const len = arr.length
  const copy = new Array(len)

  for (let i = 0; i < len; ++i) {
    copy[i] = arr[i].slice()
  }

  return copy
}

export const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(value, max))
}
