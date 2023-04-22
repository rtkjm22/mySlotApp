import { ReelItem } from '@/types/slot/ReelItem.type'
import Deme from './Deme'

const ReelItem = ({ reelAnimation, reelArr, option }: ReelItem) => {
  return (
    <>
      <ul className={`${reelAnimation}`}>
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
