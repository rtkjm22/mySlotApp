import Image from 'next/image'
import { Reel } from './Reel.alias'

const Reel = ({ position, active, reelArr, resultArr }: Reel) => {
  return (
    <div className="w-full h-[600px] bg-white transition-all overflow-hidden">
      {/* リール目 */}
      <div
        className={`transition-all duration-300 ${
          active ? 'visible opacity-100' : `opacity-0 h-0`
        }`}
      >
        <ul className={`animate-slide-bottom-${position}`}>
          {reelArr.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className={`w-full h-[200px] text-center border flex justify-center items-center`}
            >
              <Image
                src={`/img/reel_${item}.png`}
                alt="リールの出目"
                width={250}
                height={250}
                className={`object-contain`}
              />
            </li>
          ))}
        </ul>
        <ul className={`opacity-0 animate-slide-bottom-${position}`}>
          {reelArr.map((item, index) => (
            <li
              key={`${item}2-${index}`}
              className={`w-full h-[200px] text-center border flex justify-center items-center`}
            >
              <Image
                src={`/img/reel_${item}.png`}
                alt="リールの出目"
                width={250}
                height={250}
                className={`object-contain`}
              />
            </li>
          ))}
        </ul>
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
              key={`${item}2-${index}`}
              className={`w-full h-[200px] text-center border bg-yellow-300 flex justify-center items-center`}
            >
              <Image
                src="/img/reel_watermelon.png"
                alt="リールの出目"
                width={250}
                height={250}
                className={`object-contain`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Reel
