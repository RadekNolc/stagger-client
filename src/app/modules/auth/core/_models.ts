// API: TokenResponse
export interface AuthModel {
  token: string
}

// API: VerifyTokenResponse
export interface UserModel {
  id: number
  username: string
  emailAddress: string
  auth?: AuthModel
}