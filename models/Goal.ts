import { Model, useRepo } from 'pinia-orm'

export class Goal extends Model {
  static entity = 'goals'

  static fields (): any {
    return {
      id: this.string(''),
      title: this.string(''),
      description: this.string(''),
      createdAt: this.string(''),
      createdBy: this.string(''),
      percentageCompleted: this.number(0),
      endsOn: this.attr(null),
      startsOn: this.attr(null),
      status: this.string(''),
      assignedTo: this.attr(null),
      assignedBy: this.string('')
    }
  }

  declare id: string
  declare title: string
  declare description: string
  declare createdAt: string
  declare createdBy: string
  declare startsOn: string | null
  declare endsOn: string | null
  declare percentageCompleted: number
  declare status: string
  declare assignedTo: string | null
  declare assignedBy: string | null
}

export const goalRepo = useRepo(Goal)
