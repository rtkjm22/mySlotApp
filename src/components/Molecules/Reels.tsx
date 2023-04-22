import { reelLeft, reelMiddle, reelRight } from '@/const/slot/Reels.const'
import { Reels } from '../../types/slot/Reels.type'
import Reel from './Reel'

const Reels = ({ active, resultArr }: Reels) => {
  return (
    <>
      {/* リール（左） */}
      <Reel
        position="left"
        active={active}
        reelArr={reelLeft}
        resultArr={resultArr.left}
      />

      {/* リール（中央） */}
      <Reel
        position="middle"
        active={active}
        reelArr={reelMiddle}
        resultArr={resultArr.middle}
      />

      {/* リール（右） */}
      <Reel
        position="right"
        active={active}
        reelArr={reelRight}
        resultArr={resultArr.right}
      />
    </>
  )
}

export default Reels
