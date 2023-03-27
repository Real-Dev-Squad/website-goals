import { GOAL_TYPE, GOAL_STATUS, DEFAULT_GOAL } from '../../constant/goal'

const DEFAULT_GOAL_MOCK = {
  id: 'test id 1',
  ...DEFAULT_GOAL
}

const COMPLETED_GOAL_MOCK = {
  id: 'test id 2',
  title: 'Test Goal',
  status: GOAL_STATUS.COMPLETED,
  type: GOAL_TYPE.STANDUP
}

export {
  DEFAULT_GOAL_MOCK,
  COMPLETED_GOAL_MOCK
}
