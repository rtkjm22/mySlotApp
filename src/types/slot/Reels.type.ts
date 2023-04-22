type Reels = {
  active: Boolean
  resultArr: ResultArr
}

type ResultArr = {
  left: { key: Number; name: String }[]
  middle: { key: Number; name: String }[]
  right: { key: Number; name: String }[]
}

export type { Reels, ResultArr }
