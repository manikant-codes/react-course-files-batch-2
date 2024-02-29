import React from "react";
import { useReducer } from "react";

const initialState = 0;

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  MULTI_INCREMENT: "MULTI_INCREMENT",
};

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return count + 1;
    case ACTIONS.DECREMENT:
      return count - 1;
    case ACTIONS.MULTI_INCREMENT:
      return count + action.payload;
    default:
      return count;
  }
}

function ReducerHookDemo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function multiIncrement() {
    dispatch({ type: ACTIONS.MULTI_INCREMENT, payload: 3 });
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={multiIncrement}>+++</button>
    </div>
  );
}

export default ReducerHookDemo;
