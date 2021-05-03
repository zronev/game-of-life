import { applyClassicRules } from './rules'

describe('when applies classic rules', () => {
  describe('when cell is alive', () => {
    it('should return a dead cell when neighbours number is greater than 3 or less than 2', () => {
      expect(applyClassicRules(true, 4)).toEqual(false)
      expect(applyClassicRules(true, 1)).toEqual(false)
      expect(applyClassicRules(true, 2)).toEqual(true)
      expect(applyClassicRules(true, 3)).toEqual(true)
    })
  })

  describe('when cell is dead', () => {
    it('should return alive cell when neighbours number is 3', () => {
      expect(applyClassicRules(false, 3)).toEqual(true)
      expect(applyClassicRules(false, 4)).toEqual(false)
      expect(applyClassicRules(false, 2)).toEqual(false)
    })
  })
})
