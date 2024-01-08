import { Model, useRepo } from 'pinia-orm'

export class User extends Model {
  static entity = 'users'

  static fields (): any {
    return {
      id: this.attr(null),
      displayName: this.string(''),
      username: this.string(''),
      firstName: this.string(''),
      lastName: this.string(''),
      avatar: this.string(null),
      initials: this.string(''),
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
