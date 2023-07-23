import { fetchGoals } from '../../adapters/goal'
import { describe, test, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { server } from '__mocks__/server'

// Start server before all tests
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})
//  Close server after all tests
afterAll(() => {
  server.close()
})
// Reset handlers after each test `important for test isolation`
afterEach(() => {
  server.resetHandlers()
})

describe('adapter/goal', () => {
  test('response should be an array', async () => {
    const goals = await fetchGoals()

    expect(goals).to.be.an('Array')
  })
})
