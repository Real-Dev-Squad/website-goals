import { Model, useRepo } from 'pinia-orm'
import { Goal } from '~/models/Goal'

export class User extends Model {
  static entity = 'users'

  static fields (): any {
    return {
      id: this.attr(null),
      username: this.string(''),
      firstName: this.string(''),
      lastName: this.string(''),
      githubDisplayName: this.string(''),
      githubId: this.attr(null),
      avatarUrl: this.string(''),

      goals: this.hasMany(Goal, 'assignedTo')
    }
  }

  declare id: string
  declare username: string
  declare firstName: string
  declare lastName: string
  declare githubDisplayName: string
  declare githubId: string
  declare avatarUrl: string
}

export const userRepo = useRepo(User)
