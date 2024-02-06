import React, { useEffect, useRef, useState } from "react";

function RefHookInputDemo() {
  const [input, setInput] = useState("");
  const countRef = useRef(0);
  const prevInputRef = useRef(input);

  useEffect(() => {
    countRef.current = countRef.current + 1;
    prevInputRef.current = input;
    console.log("ref.current", countRef.current);
    console.log("prevInputRef.current", prevInputRef.current);
    // ref.current++;
    // ref.current += 1;
  }, [input]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  console.log("input", input);
  // console.log("ref", ref);
  return (
    <div>
      <div>
        <div>
          <input type="text" onChange={handleChange} />
        </div>
        <div>Render Count: {countRef.current}</div>
        <div>Prev Input: {prevInputRef.current}</div>
      </div>
    </div>
  );
}

export default RefHookInputDemo;
