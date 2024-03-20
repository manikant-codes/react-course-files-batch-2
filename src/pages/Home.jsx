import React from "react";
import Navbar from "../components/Navbar";
import Counter from "../components/Counter";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar logo="My Company" />
        <Counter />
        <Counter />
        {/* new Navbar({logo: "My Company"}) */}
      </div>
    );
  }
}

export default Home;

// import React from 'react'

// function Home() {
//   const someVlaue = "10";
//   function someFunction() {}
//   return (
//     <div>Home</div>
//   )
// }

// export default Home;
