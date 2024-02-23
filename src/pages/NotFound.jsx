import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count - 1);
      if (count === 0) {
        navigate("/");
      }
      clearInterval(id);
    }, 1000);
  }, [count, navigate]);

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <h1>NotFound</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
}

export default NotFound;
