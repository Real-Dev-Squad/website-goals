import { it, describe, expect, afterEach, beforeEach } from 'vitest'
import { spy, stub, restore } from 'sinon'

import { mutations, actions } from '../../../store/users'
import { NORMAL_USER, NORMAL_USER_SERIALIZED } from '../../fixture/user.mock'
import userGateway from '../../../gateway/user.gateway'

const { setUserData } = mutations
const { fetchUsers } = actions

describe('Store/users', () => {
  describe('mutation/setUserData', () => {
    it('should set user data', () => {
      const state = { list: [] }

      setUserData(state, [NORMAL_USER])

      expect(state.list).to.be.length(1)
    })

    it('should serialize user data', () => {
      const state = { list: [] }

      setUserData(state, [NORMAL_USER])

      expect(state.list).to.deep.equal([NORMAL_USER_SERIALIZED])
    })
  })

  describe('action/fetchUsers', () => {
    let commit
    beforeEach(() => {
      commit = spy()
    })

    afterEach(() => {
      restore()
    })
    it('should fetch user data and commit it', async () => {
      const stubbedGetUsers = stub(userGateway, 'getUsers').resolves([NORMAL_USER])
      const state = { list: [] }

      await fetchUsers({ commit, state })

      expect(stubbedGetUsers.callCount).toBe(1)
      expect(commit.callCount).toBe(1)
    })

    it('should just return if list is already populated', async () => {
      const state = { list: [NORMAL_USER_SERIALIZED] }

      await fetchUsers({ commit, state })

      expect(state).to.deep.equal({ list: [NORMAL_USER_SERIALIZED] })
      expect(commit.callCount).to.be.eql(0)
    })

    it.todo('should call logger on failed api response')
  })
})
