import { expect, it, describe } from 'vitest'
import { ERROR_MESSAGE } from '../../../constant/goal'
import { mutations } from '../../../store/goals'
import { DEFAULT_GOAL_MOCK, COMPLETED_GOAL_MOCK } from '../../fixture/goal.mock'

const { add, remove } = mutations

describe('Store/goals', () => {
  describe('mutation/add', () => {
    it('should add goal correctly', () => {
      const state = { list: [] }

      add(state, COMPLETED_GOAL_MOCK)

      expect(state.list[0]).to.deep.equal(COMPLETED_GOAL_MOCK)
    })

    it('should add goal when list not empty', () => {
      const state = { list: [DEFAULT_GOAL_MOCK] }

      add(state, COMPLETED_GOAL_MOCK)

      expect(state.list).to.be.length(2)
    })
  })

  describe('mutation/remove', () => {
    it('should remove goal correctly', () => {
      const state = { list: [DEFAULT_GOAL_MOCK] }

      remove(state, DEFAULT_GOAL_MOCK.id)

      expect(state.list).to.be.length(0)
    })
    it('should throw error on invalid goal id', () => {
      const state = { list: [COMPLETED_GOAL_MOCK] }

      const removeWrapper = () => remove(state, DEFAULT_GOAL_MOCK.id)

      expect(removeWrapper).toThrow(new Error(ERROR_MESSAGE.GOAL_ID_NOT_FOUND))
    })
  })
})
