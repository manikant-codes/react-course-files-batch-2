import React from "react";
import Layout from "../layouts/Layout";
import { useOutletContext } from "react-router-dom";

function About() {
  const ctx = useOutletContext();
  console.log("ctx", ctx);
  return <>About</>;
}

export default About;
