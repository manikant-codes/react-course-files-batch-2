import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";

function Carousel() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const data = [
    { src: "/images/01.jpg", alt: "Hero 01" },
    { src: "/images/02.jpg", alt: "Hero 02" },
    { src: "/images/03.jpg", alt: "Hero 03" },
  ];

  const components = data.map((value, index) => {
    return <Slide key={index} src={value.src} alt={value.alt} />;
  });

  console.log(components);
  return (
    <div>
      <Slider {...settings}>{components}</Slider>
    </div>
  );
}

export default Carousel;
