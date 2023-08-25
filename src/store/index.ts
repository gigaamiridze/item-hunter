import { configureStore } from '@reduxjs/toolkit';
import { playerReducer } from '../features';

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
