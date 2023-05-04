import axios from 'axios'
import * as goalAdapter from './goal.transformer'
import { type Goal } from '~/interfaces/Goal'
import { type UserGoal } from '~/interfaces/UserGoal'
import { API } from '~/constants/api'

export const fetchGoals = async (): Promise<Goal []> => {
  const goals: Goal[] = await axios
    .get(`${API.GOAL_BASE_URL}/goal/`)
    .then(res => goalAdapter.transformGoalsFromApi(res.data.data))
    .catch(error => {
      throw new Error(error)
    })

  return goals
}

export const fetchUserGoals = async (): Promise<UserGoal []> => {
  const userGoals: UserGoal[] = await axios
    .get(`${API.GOAL_BASE_URL}/usergoal/`)
    .then(res => goalAdapter.transformUserGoalsFromApi(res.data.data))
    .catch(error => {
      throw new Error(error)
    })

  return userGoals
}
