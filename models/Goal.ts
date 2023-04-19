import { Model, useRepo } from 'pinia-orm'
import { UserGoal } from '~/models/UserGoal'

export class Goal extends Model {
  static entity = 'goals'

  static fields (): any {
    return {
      id: this.attr(null),
      goalType: this.string(null),
      title: this.string(''),
      description: this.string(''),
      createdAt: this.string(null),
      createdBy: this.attr(null),

      userGoals: this.hasMany(UserGoal, 'goalId')
    }
  }

  declare id: string
  declare goalType: string
  declare title: string
  declare description: string
  declare createdAt: string
  declare createdBy: string
}

export const goalRepo = useRepo(Goal)
