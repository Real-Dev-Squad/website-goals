import { Goal } from "~/interfaces/Goal"
import { UserGoal } from "~/interfaces/UserGoal";

export const transformUserGoalsFromApi = (userGoals: any): Array<UserGoal> => {
  const transformedUserGoals = userGoals.map((userGoal: any) => transformUserGoalFromApi(userGoal))
  return transformedUserGoals;
}

export const transformUserGoalFromApi = (userGoal: any): UserGoal => {
  const attributes = userGoal.attributes;
  return {
    id: userGoal.id,
    userId: attributes.userId,
    startsOn: attributes.startsOn,
    endsOn: attributes.endsOn,
    percentageCompleted: attributes.percentageCompleted,
    assignedBy: attributes.assignedBy,
    status: attributes.status,
  }
}

export const transformGoalsFromApi = (goals: any): Array<Goal> => {
  const transformedGoals = goals.map((goal: any) => transformGoalFromApi(goal))
  return transformedGoals;
}

export const transformGoalFromApi = (goal: any): Goal => {
  const attributes = goal.attributes;

  return {
    id: goal.id,
    goalType: attributes.goalType,
    title: attributes.title,
    description: attributes.description,
    createdAt: attributes.createdAt,
    createdBy: attributes.createdBy,
  }
}