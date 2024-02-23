import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/layouts/navbar.module.css";

function Navbar() {
  return (
    <nav id="mainNav" className={styles.container}>
      <div>
        <h1>Pokedex</h1>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/">
            {(obj) => {
              return obj.isActive ? "At Home Page" : "Home";
            }}
          </NavLink>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          {/* <Link to="/about">About</Link> */}
          <NavLink to="/about">
            {(obj) => {
              return obj.isActive ? "At About Page" : "About";
            }}
          </NavLink>
        </li>
        <li>
          {/* <Link to="/pokedex">Pokedex</Link> */}
          <NavLink to="/products">
            {(obj) => {
              return obj.isActive ? "At Products Page" : "Products";
            }}
          </NavLink>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          <NavLink to="/contact">
            {(obj) => {
              return obj.isActive ? "At Contact Page" : "Contact";
            }}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
