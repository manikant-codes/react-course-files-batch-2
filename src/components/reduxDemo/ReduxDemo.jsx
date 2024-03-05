import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restock, sell } from "../../redux/slices/cakeSlice";

function ReduxDemo() {
  const cake = useSelector((state) => {
    return state.cake;
  });
  const dispatch = useDispatch();

  function decrement() {
    dispatch(sell());
  }

  function increment() {
    dispatch(restock(1));
  }

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <p>Cakes in store: {cake.numberOfCakes}</p>
        <button onClick={increment}>+</button>
        {/* <button onClick={multiIncrement}>+++</button> */}
      </div>
    </div>
  );
}

export default ReduxDemo;
