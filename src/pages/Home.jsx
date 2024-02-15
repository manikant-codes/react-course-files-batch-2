import React from "react";

import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Carousel from "../components/home/carousel/Carousel";
import InfoRow from "../components/home/infoRow/InfoRow";

function Home() {
  return (
    <div>
      <Carousel />
      <InfoRow
        src="/images/01.jpg"
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab!"
      />
    </div>
  );
}

export default Home;
