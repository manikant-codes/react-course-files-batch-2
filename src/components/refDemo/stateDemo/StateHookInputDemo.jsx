import { useEffect, useState } from "react";

function StateHookInputDemo() {
  const [input, setInput] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((rc) => rc + 1);
  }, [input]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  console.log("input", input);

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
      <div>Render Count: {renderCount}</div>
    </div>
  );
}

export default StateHookInputDemo;
