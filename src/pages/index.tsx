import { useEffect, useState } from 'react'
import { prob, reelLeft, reelMiddle, reelRight } from '@/const/slot/Reels.const'
import { demeKind } from '@/const/slot/Deme.const'
import { Deme, DemeKind } from '@/types/slot/Deme.type'
import { ResultArr } from '@/types/slot/Reels.type'
import Reels from '@/components/Molecules/Reels'

export default function Home() {
  const [active, setActive] = useState(false)
  const [isWin, setIsWin] = useState(false)
  const [resultArr, setResultArr] = useState<ResultArr>({
    left: [],
    middle: [],
    right: []
  })

  useEffect(() => {
    setResultArr({
      left: reelLeft.slice(0, 3),
      middle: reelMiddle.slice(0, 3),
      right: reelRight.slice(0, 3)
    })
  }, [])

  const setArr = (targetArr: Deme[], deme?: DemeKind) => {
    const arr = [...targetArr]
    const targetDeme = deme
      ? deme
      : demeKind[Math.floor(Math.random() * demeKind.length)]
    const filteredArr = arr.filter((n) => n.name === targetDeme)
    const index: Number =
      filteredArr[Math.floor(Math.random() * filteredArr.length)].key

    return [
      arr[index == 0 ? 19 : +index - 1],
      arr[+index],
      arr[index == 19 ? 0 : +index + 1]
    ]
  }

  const sttSlot = () => {
    // スロットの開始判定
    setActive(!active)
    if (!active) return

    // 当たり判定
    const atari = Math.random() < prob
    setIsWin(atari)
    if (isWin) {
      // 当たり目の設定
      const deme = demeKind[Math.floor(Math.random() * demeKind.length)]
      setResultArr({
        left: setArr(reelLeft, deme),
        middle: setArr(reelMiddle, deme),
        right: setArr(reelRight, deme)
      })
    } else {
      // はずれの場合はランダムな出目を表示
      setResultArr({
        left: setArr(reelLeft),
        middle: setArr(reelMiddle),
        right: setArr(reelRight)
      })
    }
  }
  return (
    <div className={`h-[100vh] flex flex-col justify-center items-center`}>
      <div className="w-[900px]">
        <div className="w-full grid grid-cols-3 gap-4">
          <Reels active={active} resultArr={resultArr} />
        </div>

        <button className="px-4 py-2 text-white bg-gray-800 dark:bg-white dark:text-gray-800" onClick={sttSlot}>
          click:{active ? 'true' : 'false'}
        </button>
      </div>
    </div>
  )
}
