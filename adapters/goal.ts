import axios from 'axios'
import * as goalAdapter from './goal.transformer'
import { type Goal } from '~/interfaces/Goal'
import { type PostGoal } from '~/interfaces/PostGoal'
import { API } from '../constants/api'

const goalSiteConfig = {
  headers: {
    'Content-Type': 'application/vnd.api+json'
  }
}

export const fetchGoals = async (): Promise<Goal[]> => {
  const goals: Goal[] = await axios
    .get(`${API.GOAL_BASE_URL}/goal/`)
    .then((res) => goalAdapter.transformGoalsFromApi(res.data.data))
    .catch((error) => {
      throw new Error(error)
    })

  return goals
}

export const addGoal = async (goal: PostGoal): Promise<Goal> => {
  const goalResponse = await axios
    .post(
      `${API.GOAL_BASE_URL}/goal/`,
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

export const updateGoal = async (
  goalId: string,
  goal: PostGoal
): Promise<Goal> => {
  if (goalId) throw Error("Goal not found");
  const goalResponse = await axios
    .patch(
      `${API.GOAL_BASE_URL}/goal/${goalId}/`,
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
