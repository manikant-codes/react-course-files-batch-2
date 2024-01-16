import React, { useState, useEffect } from "react";
// setInterval(function () {
//   setCount(function (prevValue) {
//     return prevValue + 1;
//   });
// }, 1000);

function UseEffectExample1() {
  const [count, setCount] = useState(0);
  // count++;
  // count += 1;
  // count = count + 1;

  useEffect(
    function () {
      console.log("Inside Use-Effect");
      const myInterval = setInterval(function () {
        setCount(function (prevState) {
          return prevState + 1;
        });
      }, 1000);

      return function () {
        console.log("Inside Clean-Up");
        clearInterval(myInterval);
      };
    },
    [count]
  );

  console.log("Rendering");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        <p style={{ fontSize: "4rem", fontWeight: "bold" }}>{count}</p>
      </div>
    </div>
  );
}

export default UseEffectExample1;
