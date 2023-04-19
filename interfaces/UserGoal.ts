export interface UserGoal {
  id: string
  startsOn: string
  endsOn: string
  percentageCompleted: number
  assignedBy: string
  status: string

  userId: string
  goalId: string
}
