import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// const myElement = React.createElement("h1", {}, "Hello World!");
// function Car() {
//   return <h1>Car</h1>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
