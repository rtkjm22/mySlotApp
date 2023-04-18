import { ResultArr, ReelItem } from './index.alias'
import Reel from '@/components/Molecules/Reel'
import { ReelKind } from '@/components/Molecules/Reel.alias'
import { useEffect, useState } from 'react'

export default function Home() {
  const [active, setActive] = useState(false)
  const [isWin, setIsWin] = useState(false)
  const [resultArr, setResultArr] = useState<ResultArr>({
    left: [],
    middle: [],
    right: []
  })

  const arr1 = [...Array(20).keys()].map((i) => ++i).sort((a, b) => b - a)
  const arr2 = [...Array(3).keys()].map((i) => ++i).sort((a, b) => b - a)

  const prob = 0

  const reelKind: ReelKind[] = [
    'cherry',
    'bar',
    'grape',
    'replay',
    'bell',
    'watermelon',
    'seven'
  ]
  const reelLeft = [
    {
      key: 0,
      name: 'bell'
    },
    {
      key: 1,
      name: 'watermelon'
    },
    {
      key: 2,
      name: 'watermelon'
    },
    {
      key: 3,
      name: 'grape'
    },
    {
      key: 4,
      name: 'replay'
    },
    {
      key: 5,
      name: 'bell'
    },
    {
      key: 6,
      name: 'watermelon'
    },
    {
      key: 7,
      name: 'cherry'
    },
    {
      key: 8,
      name: 'bar'
    },
    {
      key: 9,
      name: 'replay'
    },
    {
      key: 10,
      name: 'bell'
    },
    {
      key: 11,
      name: 'watermelon'
    },
    {
      key: 12,
      name: 'watermelon'
    },
    {
      key: 13,
      name: 'grape'
    },
    {
      key: 14,
      name: 'replay'
    },
    {
      key: 15,
      name: 'bell'
    },
    {
      key: 16,
      name: 'watermelon'
    },
    {
      key: 17,
      name: 'seven'
    },
    {
      key: 18,
      name: 'seven'
    },
    {
      key: 19,
      name: 'replay'
    }
  ]
  const reelMiddle = [
    {
      key: 0,
      name: 'replay'
    },
    {
      key: 1,
      name: 'grape'
    },
    {
      key: 2,
      name: 'cherry'
    },
    {
      key: 3,
      name: 'watermelon'
    },
    {
      key: 4,
      name: 'bell'
    },
    {
      key: 5,
      name: 'replay'
    },
    {
      key: 6,
      name: 'bar'
    },
    {
      key: 7,
      name: 'cherry'
    },
    {
      key: 8,
      name: 'watermelon'
    },
    {
      key: 9,
      name: 'bell'
    },
    {
      key: 10,
      name: 'replay'
    },
    {
      key: 11,
      name: 'grape'
    },
    {
      key: 12,
      name: 'cherry'
    },
    {
      key: 13,
      name: 'watermelon'
    },
    {
      key: 14,
      name: 'bell'
    },
    {
      key: 15,
      name: 'replay'
    },
    {
      key: 16,
      name: 'seven'
    },
    {
      key: 17,
      name: 'seven'
    },
    {
      key: 18,
      name: 'watermelon'
    },
    {
      key: 19,
      name: 'bell'
    }
  ]
  const reelRight = [
    {
      key: 0,
      name: 'bell'
    },
    {
      key: 1,
      name: 'watermelon'
    },
    {
      key: 2,
      name: 'grape'
    },
    {
      key: 3,
      name: 'replay'
    },
    {
      key: 4,
      name: 'cherry'
    },
    {
      key: 5,
      name: 'bell'
    },
    {
      key: 6,
      name: 'watermelon'
    },
    {
      key: 7,
      name: 'bar'
    },
    {
      key: 8,
      name: 'replay'
    },
    {
      key: 9,
      name: 'cherry'
    },
    {
      key: 10,
      name: 'bell'
    },
    {
      key: 11,
      name: 'watermelon'
    },
    {
      key: 12,
      name: 'grape'
    },
    {
      key: 13,
      name: 'replay'
    },
    {
      key: 14,
      name: 'cherry'
    },
    {
      key: 15,
      name: 'bell'
    },
    {
      key: 16,
      name: 'seven'
    },
    {
      key: 17,
      name: 'seven'
    },
    {
      key: 18,
      name: 'replay'
    },
    {
      key: 19,
      name: 'cherry'
    }
  ]

  useEffect(() => {
    setResultArr({
      left: reelLeft.slice(0, 3),
      middle: reelMiddle.slice(0, 3),
      right: reelRight.slice(0, 3)
    })
  }, [])

  const setArr = (
    reel: ReelKind[],
    targetArr: ReelItem[]
  ) => {
    const arr = [...targetArr]
    const deme = reel[Math.floor(Math.random() * reel.length)]
    let filteredArr = arr.filter((n) => n.name === deme)
    let index = filteredArr[Math.floor(Math.random() * filteredArr.length)].key
    return [
      arr[+index == 0 ? 19 : +index - 1],
      arr[+index],
      arr[index == 19 ? 0 : +index + 1]
    ]
  }

  const sttSlot = () => {
    // スロットの開始判定
    setActive(!active)
    if (!active) return

    // 当たり判定
    const atari = Math.random() > prob
    setIsWin(atari)
    if (!isWin) return

    setResultArr({
      left: setArr(reelKind, reelLeft),
      middle: setArr(reelKind, reelMiddle),
      right: setArr(reelKind, reelRight)
    })
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
        </div>

        <button className="px-4 py-2 bg-white text-black" onClick={sttSlot}>
          click:{active ? 'true' : 'false'}
        </button>
      </div>
    </main>
  )
}
