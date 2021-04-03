export const getRandomValue = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const arrayClone = <T>(arr: T[]) => JSON.parse(JSON.stringify(arr))

export const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(value, max))
