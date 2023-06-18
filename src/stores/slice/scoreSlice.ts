import { Score } from '@/types/store/score/score'
import { createSlice } from '@reduxjs/toolkit'

const initialState: {score: Score} = {
  score: {
    play_count: 0,
    last_played: new Date(),
    win_rate: 0,
    coin: 0,
    unique_id: '',
  }
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setScore: (state, action): void => {
      state.score = action.payload
    }
  }
})

export const { setScore } = scoreSlice.actions

export const selectScore = (state: {score: { score: Score }}) =>
  state.score.score

export default scoreSlice.reducer
