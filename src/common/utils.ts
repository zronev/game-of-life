export const getRandomValue = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const arrayClone = (arr: any[]) => JSON.parse(JSON.stringify(arr))
