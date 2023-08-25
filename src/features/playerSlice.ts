import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IPlayerState } from '../interfaces';
import { RootState } from '../store';

const initialState: IPlayerState = {
  x: 0,
  y: 0,
  score: 0,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    movePlayer: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
  },
});

export const { movePlayer, incrementScore } = playerSlice.actions;
export const selectPlayerState = (state: RootState) => state.player;

export default playerSlice.reducer;
