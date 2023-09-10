import { Model, useRepo } from 'pinia-orm'

export class Goal extends Model {
  static entity = 'goals'

  static fields (): any {
    return {
      id: this.attr(null),
      title: this.string(''),
      description: this.string(''),
      createdAt: this.string(null),
      createdBy: this.attr(null),
      startsOn: this.string(''),
      endsOn: this.string(''),
      percentageCompleted: this.number(0),
      status: this.string(null),
      assignedTo: this.attr(null),
      assignedBy: this.string(null)
    }
  }

  declare id: string
  declare title: string
  declare description: string
  declare createdAt: string
  declare createdBy: string
  declare startsOn: string
  declare endsOn: string
  declare percentageCompleted: number
  declare status: string
  declare assignedTo: string
  declare assignedBy: string
}

export const goalRepo = useRepo(Goal)
