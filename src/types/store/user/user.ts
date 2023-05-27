type UserInfo = {
  id: Number
  name: String
  email: String
  unique_id: String
}

type User = {
  userInfo: UserInfo
}

export type { UserInfo, User }
