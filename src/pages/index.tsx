import Reel from '@/components/Molecules/Reel'
import { useState } from 'react'

export default function Home() {
  const [active, setActive] = useState(false)

  const arr1 = [...Array(20).keys()].map((i) => ++i).sort((a, b) => b - a)
  const arr2 = [...Array(3).keys()].map((i) => ++i).sort((a, b) => b - a)

  const reelLeft = [
    'bell',
    'watermelon',
    'watermelon',
    'grape',
    'replay',
    'bell',
    'watermelon',
    'cherry',
    'bar',
    'replay',
    'bell',
    'watermelon',
    'watermelon',
    'grape',
    'replay',
    'bell',
    'watermelon',
    'seven',
    'seven',
    'replay'
  ]

  const reelMiddle = [
    'replay',
    'grape',
    'cherry',
    'watermelon',
    'bell',
    'replay',
    'bar',
    'cherry',
    'watermelon',
    'bell',
    'replay',
    'grape',
    'cherry',
    'watermelon',
    'bell',
    'replay',
    'seven',
    'seven',
    'watermelon',
    'bell'
  ]

  const reelRight = [
    'bell',
    'watermelon',
    'grape',
    'replay',
    'cherry',
    'bell',
    'watermelon',
    'bar',
    'replay',
    'cherry',
    'bell',
    'watermelon',
    'grape',
    'replay',
    'cherry',
    'bell',
    'seven',
    'seven',
    'replay',
    'cherry'
  ]

  const sttSlot = () => {
    setActive(!active)
  }
  return (
    <main className={`h-[100vh] flex flex-col justify-center items-center`}>
      <div className="w-[900px]">
        <div className="w-full grid grid-cols-3 gap-4">
          {/* リール（左） */}
          <Reel
            position="left"
            active={active}
            reelArr={reelLeft}
            resultArr={arr2}
          />

          {/* リール（中央） */}
          <Reel
            position="middle"
            active={active}
            reelArr={reelMiddle}
            resultArr={arr2}
          />

          {/* リール（右） */}
          <Reel
            position="right"
            active={active}
            reelArr={reelRight}
            resultArr={arr2}
          />
        </div>

        <button className="px-4 py-2 bg-white text-black" onClick={sttSlot}>
          click:{active ? 'true' : 'false'}
        </button>
      </div>
    </main>
  )
}
