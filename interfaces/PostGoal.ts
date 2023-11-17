export interface PostGoal {
  title?: string
  description?: string
  createdBy?: string
  startsOn?: string | null,
  endsOn?: string | null,
  status?: string
  percentageCompleted?: number
  assignedBy?: string
  assignedTo?: string | null
}
