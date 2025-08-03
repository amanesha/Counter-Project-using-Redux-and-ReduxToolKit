// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const counterReducer = (state = { counter: 0, toogle: true }, action) => {
//   console.log("state in Redux", state, "acton in Redux", action);
//   if (action.type === "INC") {
//     return { counter: state.counter + 1, toogle: state.toogle };
//   }
//   if (action.type === "DEC") {
//     return { counter: state.counter - 1, toogle: state.toogle };
//   }
//   if (action.type === "INCTEN") {
//     return { counter: state.counter + action.amount, toogle: state.toogle };
//   }
//   if (action.type === "HIDE-SHOW") {
//     return { counter: state.counter, toogle: !state.toogle };
//   }
//   return state;
// };

// export const store = createStore(counterReducer);
// console.log("store in redux", store);

//................................................
//...............reduxToolKit.....................
//................................................


const initialState = { counter: 0, toogle: true };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.toogle = !state.toogle;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
