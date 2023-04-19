import { Model, useRepo } from 'pinia-orm'

export class UserGoal extends Model {
  static entity = 'usergoals'

  static fields (): any {
    return {
      id: this.attr(null),
      startsOn: this.string(''),
      endsOn: this.string(''),
      precentageCompleted: this.number(0),
      assignedBy: this.string(null),
      status: this.string(null),

      userId: this.attr(null),
      goalId: this.attr(null)
    }
  }

  declare id: string
  declare startsOn: string
  declare endsOn: string
  declare precentageCompleted: number
  declare assignedBy: string
  declare status: string

  declare userId: string
  declare goalId: string
}

export const userGoalRepo = useRepo(UserGoal)
