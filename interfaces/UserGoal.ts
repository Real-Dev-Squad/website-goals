export interface UserGoal {
  id: string,
  userId: string,
  startsOn: string,
  endsOn: string,
  percentageCompleted: number,
  assignedBy: string,
  status: string,
}