import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restock, sell } from "../../redux/slices/cakeSlice";
import styles from "../../styles/reduxDemo/reduxDemo.module.css";

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
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        <button onClick={decrement}>-</button>
        <p>Cakes : {cake.numberOfCakes}</p>
        <button onClick={increment}>+</button>
        <button onClick={() => {}}>+++</button>
      </div>
    </div>
  );
}

export default ReduxDemo;
