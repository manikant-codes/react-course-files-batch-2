import React from "react";
import { useUser } from "./UserProvider";

function ComponentE() {
  const user = useUser();
  return <div>Hello, {user}</div>;
}

export default ComponentE;
