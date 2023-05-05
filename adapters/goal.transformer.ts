import { type Goal } from '~/interfaces/Goal'
import { type UserGoal } from '~/interfaces/UserGoal'

export const transformUserGoalsFromApi = (userGoals: any): UserGoal[] => {
  const transformedUserGoals = userGoals.map((userGoal: any) => transformUserGoalFromApi(userGoal))
  return transformedUserGoals
}

export const transformUserGoalFromApi = (userGoal: any): UserGoal => {
  const attributes = userGoal.attributes
  return {
    id: userGoal.id,
    startsOn: attributes.starts_on,
    endsOn: attributes.ends_on,
    percentageCompleted: attributes.percentage_completed,
    assignedBy: attributes.assigned_by,
    status: attributes.status,

    userId: attributes.user_id,
    goalId: userGoal.relationships.goal.data.id
  }
}

export const transformGoalsFromApi = (goals: any): Goal[] => {
  const transformedGoals = goals.map((goal: any) => transformGoalFromApi(goal))
  return transformedGoals
}

export const transformGoalFromApi = (goal: any): Goal => {
  const attributes = goal.attributes

  return {
    id: goal.id,
    goalType: attributes.goal_type,
    title: attributes.title,
    description: attributes.description,
    createdAt: attributes.created_at,
    createdBy: attributes.created_by
  }
}
