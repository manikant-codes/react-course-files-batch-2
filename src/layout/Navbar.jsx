import React from "react";
import { companyName } from "../data/data";
import { Link } from "react-router-dom";

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
          {/* <a href="/" style={{ color: "white" }}>
            Home
          </a> */}
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "white" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "white" }}>
            Contact
          </Link>
        </li>
        {/* More links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
