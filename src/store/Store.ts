import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './CartSlice';

export const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  }
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;