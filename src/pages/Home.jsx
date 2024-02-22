import React from "react";

import Carousel from "../components/home/carousel/Carousel";
import CounterRow from "../components/home/counterRow/CounterRow";
import InfoRow from "../components/home/infoRow/InfoRow";
import ProductsRow from "../components/home/productsRow/ProductsRow";
import FaqsRow from "../components/home/faqsRow/FaqsRow";
import ContactRow from "../components/home/contactRow/ContactRow";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Layout from "../layouts/Layout";
import { useOutletContext } from "react-router-dom";

function Home() {
  const context = useOutletContext();
  console.log("context", context);
  return (
    <>
      <Carousel />
      {/* {context} */}
      <InfoRow
        src="/images/01.jpg"
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <InfoRow
        src="/images/03.jpg"
        title="Our Journey"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        contentFirst
      />
      <CounterRow />
      <ProductsRow />
      <FaqsRow />
      <ContactRow />
    </>
  );
}

export default Home;
