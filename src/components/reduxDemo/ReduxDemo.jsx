import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { restock, sell } from "../../redux/slices/cakeSlice";
import {
  restock as restockIcecream,
  sell as sellIcecream,
} from "../../redux/slices/icecreamSlice";
import styles from "../../styles/reduxDemo/reduxDemo.module.css";
import { fetchUsers } from "../../redux/slices/userSlice";

function ReduxDemo() {
  const cake = useSelector((store) => {
    return store.cake;
  });

  const user = useSelector((store) => {
    return store.user;
  });

  const icecream = useSelector((store) => {
    return store.icecream;
  });

  console.log(icecream.numberOfIcecreams);

  const dispatch = useDispatch();

  function sellCake() {
    dispatch(sell());
  }

  function restockCake() {
    dispatch(restock(1));
  }

  function sellIcecreamFn() {
    console.log(sellIcecream());
    dispatch(sellIcecream());
  }

  function restockIcecreamFn() {
    dispatch(restockIcecream(1));
  }

  function incrementByAmount() {
    dispatch(restock(3));
  }

  console.log(user.loading);
  console.log(user.error);
  console.log(user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <button onClick={sellCake}>-</button>
          <p>Cakes : {cake.numberOfCakes}</p>
          <button onClick={restockCake}>+</button>
          <button onClick={incrementByAmount}>+++</button>
        </div>
        <div className={styles.containerInner}>
          <button onClick={sellIcecreamFn}>-</button>
          <p>Icecream : {icecream.numberOfIcecreams}</p>
          <p>Cash : ${icecream.cash}</p>
          <button onClick={restockIcecreamFn}>+</button>
        </div>
      </div>
    </>
  );
}

export default ReduxDemo;
