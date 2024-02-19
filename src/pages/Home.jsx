import React from "react";

import Carousel from "../components/home/carousel/Carousel";
import CounterRow from "../components/home/counterRow/CounterRow";
import InfoRow from "../components/home/infoRow/InfoRow";
import ProductsRow from "../components/home/productsRow/ProductsRow";
import FaqsRow from "../components/home/faqsRow/FaqsRow";
import ContactRow from "../components/home/contactRow/ContactRow";

function Home() {
  return (
    <div>
      <Carousel />
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
    </div>
  );
}

export default Home;
