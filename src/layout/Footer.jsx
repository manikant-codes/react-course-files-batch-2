import React from "react";
import { companyName } from "../data/data";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#212121",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "1.2rem" }}>Copyright &copy; 2024 {companyName}</p>
    </footer>
  );
}

export default Footer;
