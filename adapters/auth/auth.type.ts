export interface SelfInfo {
  id: string
  displayName: string
  username: string
  firstName: string
  lastName: string
  avatar: string
  initials: string
  roles: {
    archived: boolean | undefined;
    member: boolean | undefined;
  };
  status: string | undefined;
  incompleteUserDetails: boolean | undefined;
}
