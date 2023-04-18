import { ReactNode } from 'react'

type ReelKind =
  | 'cherry'
  | 'bar'
  | 'grape'
  | 'replay'
  | 'bell'
  | 'watermelon'
  | 'seven'

type Reel = {
  position: 'left' | 'middle' | 'right'
  active: Boolean
  reelArr: {
    key: Number
    name: String
  }[]
  resultArr: {
    key: Number
    name: String
  }[]
}

export type { Reel, ReelKind }
