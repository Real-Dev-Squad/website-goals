import { type Goal } from '~/interfaces/Goal'

export const transformGoalsFromApi = (goals: any): Goal[] => {
  const transformedGoals = goals.map((goal: any) => transformGoalFromApi(goal))
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
