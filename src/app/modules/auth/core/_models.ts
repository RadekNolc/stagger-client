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

// API: UserProfileResponse
export interface UserProfileModel {
  roles: Array<string>
  coins: number
  maxCoins: number
  //successRate: number
  universityCount: number
}