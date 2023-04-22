import { DemeKind } from './Deme.type'

type ReelAnimation =
  | 'animate-slide-bottom-left'
  | 'animate-slide-bottom-middle'
  | 'animate-slide-bottom-right'

type ReelItem = {
  reelArr: {
    name: String
    key: Number
  }[]
  reelAnimation?: ReelAnimation
  option?: 'sub' | 'result'
  active?: Boolean
}

export type { ReelAnimation, ReelItem }
