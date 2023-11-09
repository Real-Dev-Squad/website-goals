import * as goalAdapter from '~/adapters/goal'
import { describe, test, expect } from 'vitest'

describe('adapter/goal', () => {
  describe('fetchGoals', () => {
    test('response should be an array', async () => {
      const goals = await goalAdapter.fetchGoals()
  
      expect(goals).to.be.an('Array')
    })
  })
})
