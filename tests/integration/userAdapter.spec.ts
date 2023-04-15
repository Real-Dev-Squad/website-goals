import { expect } from 'chai';
import { fetchUsers } from '../../adapters/user';
import { describe, test } from 'vitest'

describe('adapter/user', async () => {
  test('response should be an array', async () => {
    const users = await fetchUsers();

    expect(users).to.be.an('Array');
  })
})