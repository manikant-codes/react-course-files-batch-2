import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <a
        id="btnWhatsapp"
        style={{
          position: "fixed",
          width: "50px",
          height: "50px",
          right: "25px",
          bottom: "75px",
        }}
        aria-label="Chat on WhatsApp"
        href="https://wa.me/1111111111"
      >
        <img
          alt="Chat on WhatsApp"
          style={{ height: "100%", width: "100%" }}
          src="/images/whatsapp-icon.svg"
        />
      </a>
      <Footer />
    </div>
  );
}

export default Layout;
