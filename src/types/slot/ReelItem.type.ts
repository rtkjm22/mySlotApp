import { DemeKind } from './Deme.type'

type ReelAnimation =
  | 'animate-slide-bottom-left'
  | 'animate-slide-bottom-middle'
  | 'animate-slide-bottom-right'

type ReelItem = {
  reelAnimation: ReelAnimation
  reelArr: {
    name: String
    key: Number
  }[]
  option?: 'sub' | 'result'
}

export type { ReelAnimation, ReelItem }
