import { expect } from 'chai'
import { fetchGoals, fetchUserGoals } from '../../adapters/goal'
import { describe, test } from 'vitest'

describe('adapter/goal', () => {
  describe('fetchGoals', () => {
    test('response should be an array', async () => {
      const goals = await fetchGoals()

      expect(goals).to.be.an('Array')
    })
  })

  describe('fetchUserGoals', () => {
    test('response should be an array', async () => {
      const userGoals = await fetchUserGoals()

      expect(userGoals).to.be.an('Array')
    })
  })
})
