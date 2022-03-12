import { createSlice, configureStore } from "@reduxjs/toolkit";
import initialState from "./initialState";

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter += 1;
    },
    addBy10(state) {
      state.counter += 1;
    },
    incrementBy(state, action) {
      state.counter += action.payload;
    },
    decrementBy(state, action) {
      state.counter -= action.payload;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
