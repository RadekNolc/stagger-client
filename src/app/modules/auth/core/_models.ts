export interface AuthModel {
  token: string
}

export interface UserModel {
  id: number
  username: string
  emailAddress: string
  phoneNumber?: string
  roles: Array<string>
  auth?: AuthModel
}
