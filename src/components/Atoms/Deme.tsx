import Image from 'next/image'
import { Deme } from '../../types/slot/Deme.type'

const Deme = ({ item }: { item: Deme }) => {
  return (
    <>
      <Image
        priority={true}
        src={`/img/reel_${item.name}.png`}
        alt="リールの出目"
        width={250}
        height={250}
        className={`object-cover w-full h-auto`}
      />
    </>
  )
}

export default Deme
