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
        <ul className={`text-blue-500 animate-slide-bottom-${position}`}>
          {reelArr.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className={`w-full h-[200px] text-center border ${
                index % 2 === 0 ? 'bg-blue-50' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul
          className={`text-red-500 opacity-0 animate-slide-bottom-${position}`}
        >
          {reelArr.map((item, index) => (
            <li
              key={`${item}2-${index}`}
              className={`w-full h-[200px] text-center border ${
                index % 2 === 0 ? 'bg-red-50' : ''
              }`}
            >
              {item}
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
        <ul
          className={`text-red-500 ${
            active ? '' : 'animate-slide-bottom-delay'
          }`}
        >
          {resultArr.map((item, index) => (
            <li
              key={`${item}2-${index}`}
              className={`w-full h-[200px] text-center border bg-yellow-300 ${
                index % 2 === 0 ? 'bg-red-50' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Reel
