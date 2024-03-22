import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseEffectDemo from "./components/UseEffectDemo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseEffectDemo />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
