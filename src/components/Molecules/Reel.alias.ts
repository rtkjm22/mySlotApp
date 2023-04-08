import { ReactNode } from 'react'

type Reel = {
  position: 'left' | 'middle' | 'right'
  active: Boolean
  reelArr: ReactNode[]
  resultArr: ReactNode[]
}

export type { Reel }
