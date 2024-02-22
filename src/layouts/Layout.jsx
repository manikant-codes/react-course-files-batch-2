import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  const element = <div style={{ backgroundColor: "red" }}>Hello</div>;
  return (
    <>
      <Navbar />
      <Outlet context={{ number: 40 }} />
      {/* {props.children} */}
      <Footer />
    </>
  );
}

export default Layout;
