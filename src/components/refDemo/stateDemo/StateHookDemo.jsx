import React, { useState } from "react";

function StateHookDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <h2>Count: {count}</h2>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((c) => c - 1);
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default StateHookDemo;
