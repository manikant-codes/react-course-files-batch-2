import React from "react";
import { companyName } from "../data/data";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#F44336",
        color: "white",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        {companyName}
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1rem",
        }}
      >
        <li>
          <a href="#" style={{ color: "white" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "white" }}>
            About
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "white" }}>
            Contact
          </a>
        </li>
        {/* More links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
