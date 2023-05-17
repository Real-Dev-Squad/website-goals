import { expect } from 'chai'
import { fetchGoals } from '../../adapters/goal'
import { describe, test } from 'vitest'

describe('adapter/goal', () => {
  describe('fetchGoals', () => {
    test('response should be an array', async () => {
      const goals = await fetchGoals()

      expect(goals).to.be.an('Array')
    })
  })
})
