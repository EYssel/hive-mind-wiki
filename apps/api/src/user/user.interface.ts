export interface UserKey {
  id: string;
  email: string;
}

export interface User extends UserKey {
  firstName: string;
  lastName: string;
  deletedAt?: Date;
}
