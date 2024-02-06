import React, { useCallback, useState } from "react";
import Todos from "./Todos";

function MemoProblemDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(
    function () {
      setTodos([...todos, "New Todo"]);
    },
    [todos]
  );

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />

      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default MemoProblemDemo;
