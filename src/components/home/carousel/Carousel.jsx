import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        position: "absolute",
        top: "50%",
        right: "2.5%",
        backgroundColor: "white",
        zIndex: 100,
        height: "35px",
        width: "35px",
        color: "black",
        transform: "translate(-2.5%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-right" style={{ fontSize: "1.2rem" }}></i>
    </button>
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        position: "absolute",
        top: "50%",
        left: "2.5%",
        backgroundColor: "white",
        zIndex: 100,
        height: "35px",
        width: "35px",
        color: "black",
        transform: "translate(-2.5%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-left" style={{ fontSize: "1.2rem" }}></i>
    </button>
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
  );
}

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
