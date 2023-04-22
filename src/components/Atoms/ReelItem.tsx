import { ReelItem } from '@/types/slot/ReelItem.type'
import Deme from './Deme'

const ReelItem = ({ reelArr, reelAnimation, option, active }: ReelItem) => {
  const subClasses = option === 'sub' ? 'opacity-0' : ''

  const resultClasses =
    option === 'result' && !active ? 'animate-slide-bottom-delay' : ''

  const listsClasses = [reelAnimation, subClasses, resultClasses].join(' ')

  return (
    <>
      <ul className={listsClasses}>
        {reelArr.map((item, index) => (
          <li
            key={
              option
                ? `${option}-${item.name}-${index}`
                : `${item.name}-${index}`
            }
            className={`w-full h-[200px] text-center border flex justify-center items-center p-6`}
          >
            <Deme item={item} key={index} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ReelItem
