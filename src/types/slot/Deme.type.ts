type DemeKind =
  | ''
  | 'cherry'
  | 'bar'
  | 'grape'
  | 'replay'
  | 'bell'
  | 'watermelon'
  | 'seven'

type Deme = {
  key: Number
  name: String
}

export type { Deme, DemeKind }
