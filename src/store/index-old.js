import { createStore } from "redux";
import initialState from "./initialState";

const reducer = (store = { ...initialState }, action) => {
  if (action.type === "INC") {
    return {
      counter: store.counter + 1,
    };
  }
  if (action.type === "DEC") {
    return {
      counter: store.counter - 1,
    };
  }
  if (action.type === "ADD_BY_10") {
    return {
      counter: store.counter + 10,
    };
  }
  if (action.type === "ADD_BY") {
    return {
      counter: store.counter + action.payload,
    };
  }
  if (action.type === "DEC_BY") {
    return {
      counter: store.counter - action.payload,
    };
  }

  return store;
};

export default createStore(reducer);
