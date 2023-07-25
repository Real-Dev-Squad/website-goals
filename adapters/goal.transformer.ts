import { type Goal } from '~/interfaces/Goal'
import { type PostGoal } from '~/interfaces/PostGoal'

export const transformGoalsFromApi = (goals: any): Goal[] => {
  const transformedGoals = goals?.map((goal: any) =>
    transformGoalFromApi(goal)
  )
  return transformedGoals
}

export const transformGoalFromApi = (goal: any): Goal => {
  const attributes = goal.attributes

  return {
    id: goal.id,
    title: attributes.title,
    description: attributes.description,
    createdAt: attributes.created_at,
    createdBy: attributes.created_by,
    startsOn: attributes.starts_on,
    endsOn: attributes.ends_on,
    percentageCompleted: attributes.percentage_completed,
    assignedBy: attributes.assigned_by,
    status: attributes.status,
    assignedTo: attributes.assigned_to
  }
}

export const transformGoalAttributesToApi = (goal: PostGoal): any => {
  const transformedObj: any = {}

  function camelToUnderscore (key: string): string {
    return key.replace(/([A-Z])/g, '_$1').toLowerCase()
  }

  for (const [key, value] of Object.entries(goal)) {
    transformedObj[camelToUnderscore(key)] = value
  }

  return transformedObj
}
