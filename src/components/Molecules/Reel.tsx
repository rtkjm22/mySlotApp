import { Reel } from '@/types/slot/Reel.type'
import Deme from '../Atoms/Deme'
import ReelItem from '../Atoms/ReelItem'
import { ReelAnimation } from '@/types/slot/ReelItem.type'

const Reel = ({ position, active, reelArr, resultArr }: Reel) => {
  /**
   * Tailwindは動的にクラス名を指定すると適用されないため、明示的に定義
   * @see https://chaika.hatenablog.com/entry/2022/06/22/083000
   */
  let reelAnimation: ReelAnimation
  switch (position) {
    case 'left':
      reelAnimation = 'animate-slide-bottom-left'
      break
    case 'middle':
      reelAnimation = 'animate-slide-bottom-middle'
      break
    case 'right':
      reelAnimation = 'animate-slide-bottom-right'
      break
    default:
      reelAnimation = 'animate-slide-bottom-middle'
      break
  }

  return (
    <div className="w-full h-[600px] bg-gray-800 transition-all overflow-hidden dark:bg-white">
      {/* リール目 */}
      <div
        className={`transition-all duration-300 ${
          active ? 'visible opacity-100' : `opacity-0 h-0`
        }`}
      >
        <ReelItem reelArr={reelArr} reelAnimation={reelAnimation} />

        <ReelItem
          reelArr={reelArr}
          reelAnimation={reelAnimation}
          option="sub"
        />
      </div>

      {/* 結果 */}
      <div
        className={`transition-all duration-300 ${
          active ? 'invisible' : 'visible'
        }`}
      >
        <ReelItem reelArr={resultArr} option="result" active={active} />
      </div>
    </div>
  )
}

export default Reel
