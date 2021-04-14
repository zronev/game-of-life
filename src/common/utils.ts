export const getRandomValue = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const arrayClone = <T>(arr: T[]) => JSON.parse(JSON.stringify(arr))

export const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(value, max))

export const createMatrix = <T>(
  rows: number,
  columns: number,
  value: T
): T[][] => {
  return Array<T[]>(rows)
    .fill([])
    .map(() => Array(columns).fill(value))
}

// export const transposeMatrix = <T>(matrix: T[][]): T[][] => {
//   const clone = arrayClone(matrix)

//   for (let y = 0; y < matrix.length; y++) {
//     for (let x = 0; x < matrix[0].length; x++) {
//       const cell = matrix[y][x]
//     }
//   }

//   return clone
// }
