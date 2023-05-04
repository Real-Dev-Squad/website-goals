export interface SelfInfo {
  userId: string
  roles: {
    member: boolean
    archived: boolean
  }
  status: string
  incompleteUserDetails: boolean
}
