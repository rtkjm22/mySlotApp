type UserInfo = {
  id: Number
  name: String
  email: String
  user_id: String
}

type User = {
  userInfo: UserInfo
}

export type { UserInfo, User }
