import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      {/* Component/Page */}
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
