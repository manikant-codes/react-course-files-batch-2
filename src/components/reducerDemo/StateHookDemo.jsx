import React from "react";
import { useState } from "react";

function StateHookDemo() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      return prevCount - 1;
    });
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default StateHookDemo;
