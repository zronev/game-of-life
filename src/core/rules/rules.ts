import type { Rules } from './types'

export const applyClassicRules: Rules = (cell, neighbours) => {
  if (cell && (neighbours < 2 || neighbours > 3)) return false
  if (!cell && neighbours === 3) return true
  return cell
}
