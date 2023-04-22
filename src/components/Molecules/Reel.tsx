import { Reel } from '@/types/slot/Reel.type'
import Deme from '../../pages/Atoms/Deme'
import ReelItem from '../../pages/Atoms/ReelItem'
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
    <div className="w-full h-[600px] bg-white transition-all overflow-hidden">
      {/* リール目 */}
      <div
        className={`transition-all duration-300 ${
          active ? 'visible opacity-100' : `opacity-0 h-0`
        }`}
      >
        <ReelItem reelAnimation={reelAnimation} reelArr={reelArr} />
        <ul className={`opacity-0 ${reelAnimation}`}>
          {reelArr.map((item, index) => (
            <li
              key={`sub-${item.name}-${index}`}
              className={`w-full h-[200px] text-center border flex justify-center items-center p-6`}
            >
              <Deme item={item} key={index} />
            </li>
          ))}
        </ul>
        <ReelItem
          reelAnimation={reelAnimation}
          reelArr={reelArr}
          option={'sub'}
        />
      </div>

      {/* 結果 */}
      <div
        className={`transition-all duration-300 ${
          active ? 'invisible' : 'visible'
        }`}
      >
        <ul className={`${active ? '' : 'animate-slide-bottom-delay'}`}>
          {resultArr.map((item, index) => (
            <li
              key={`result-${item.name}-${index}`}
              className={`w-full h-[200px] text-center border flex justify-center items-center p-6`}
            >
              <Deme item={item} key={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Reel
