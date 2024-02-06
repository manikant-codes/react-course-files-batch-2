import { useEffect, useRef } from "react";

function RefHookDOMDemo() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.innerHTML = `<h1>Hello!</h1>`;
  }, []);

  return <div ref={ref}></div>;
}

export default RefHookDOMDemo;
