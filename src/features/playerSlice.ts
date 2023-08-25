import { createSlice } from '@reduxjs/toolkit';
import { IPlayerState } from '../interfaces';

const initialState: IPlayerState = {
  x: 0,
  y: 0,
  score: 0,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
});

export default playerSlice.reducer;
