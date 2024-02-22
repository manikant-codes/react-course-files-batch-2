import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Pokedex</h1>
      </div>
      <ul className={styles.links}>
        <li>
          {/* <a href="/">Home</a> */}
          {/* <Link to="/">Home</Link> */}
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? styles.activePage : "";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          {/* <Link to="/about">About</Link> */}
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? styles.activePage : "";
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          {/* <Link to="/pokedex">Pokedex</Link> */}
          <NavLink
            to="/pokedex"
            className={({ isActive }) => {
              return isActive ? styles.activePage : "";
            }}
          >
            Pokedex
          </NavLink>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive ? styles.activePage : "";
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
