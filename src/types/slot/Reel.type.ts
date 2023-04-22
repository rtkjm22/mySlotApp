type Reel = {
  position: 'left' | 'middle' | 'right'
  active: Boolean
  reelArr: {
    key: Number
    name: String
  }[]
  resultArr: {
    key: Number
    name: String
  }[]
}

type ResultArr = {
  left: { key: Number; name: String }[]
  middle: { key: Number; name: String }[]
  right: { key: Number; name: String }[]
}

export type { Reel, ResultArr }
