import * as userAdapter from '~/adapters/user'
import { describe, test, expect } from 'vitest'

describe('adapter/user', async () => {
  test.skip('response should be an array', async () => {
    const users = await userAdapter.fetchUsers()

    expect(users).to.be.an('Array')
  })
})
