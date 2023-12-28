import axios from 'axios'
import * as goalAdapter from './goal.transformer'
import { type Goal } from '~/interfaces/Goal'
import { type PostGoal } from '~/interfaces/PostGoal'
import { getConfig } from '~/config/index'

const goalSiteConfig = {
  headers: {
    'Content-Type': 'application/vnd.api+json'
  }
}

interface GoalListResponse {
  result: Goal [],
  meta: {
    pagination: {
      page: number,
      pages: number,
      count: number,
    }
  },
  links: {
    first: string,
    last: string,
    next: string,
    prev: string,
  }
}

export const fetchGoals = async (query: string): Promise<GoalListResponse> => {
  const config = getConfig();

  const response: GoalListResponse = await axios
    .get(`${config.GOALS_API}/v1/goal/?${query}`)
    .then((res) => {
      return {
        result: goalAdapter.transformGoalsFromApi(res.data.data),
        meta: res.data.meta,
        links: res.data.links,
      }
    })
    .catch((error) => {
      throw new Error(error)
    })

  return response
}

export const fetchGoalById = async (goalId: string): Promise<Goal> => {
  const config = getConfig();

  const goal: Goal = await axios
    .get(`${config.GOALS_API}/v1/goal/${goalId}/`)
    .then((res) => goalAdapter.transformGoalFromApi(res.data.data))

  return goal
}

export const addGoal = async (goal: PostGoal): Promise<Goal> => {
  const config = getConfig();

  const goalResponse = await axios
    .post(
      `${config.GOALS_API}/v1/goal/`,
      {
        data: {
          type: 'Goal',
          attributes: goal
        }
      },
      goalSiteConfig
    )
    .then((res) => goalAdapter.transformGoalFromApi(res.data.data))

  return goalResponse
}

export const deleteGoal = async (goalId: string): Promise<void> => {
  const config = getConfig();
  await axios
    .delete(
      `${config.GOALS_API}/v1/goal/${goalId}/`,
      goalSiteConfig,
    )
}

export const updateGoal = async (
  goalId: string,
  goal: PostGoal
): Promise<Goal> => {
  if (!goalId) throw Error("GoalId not defined");
  const config = getConfig();
  const goalResponse = await axios
    .patch(
      `${config.GOALS_API}/v1/goal/${goalId}/`,
      {
        data: {
          id: goalId,
          type: 'Goal',
          attributes: goalAdapter.transformGoalAttributesToApi(goal)
        }
      },
      goalSiteConfig
    )
    .then((res) => goalAdapter.transformGoalFromApi(res.data.data))

  return goalResponse
}
