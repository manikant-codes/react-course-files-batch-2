import React from "react";
import MasalaCard from "../common/MasalaCard";

// export const chip = "c1";
// export const jet = "j1";

const chip = "c1";
const jet = "j1";

function Masale() {
  const arrMasale = [
    {
      title: "Haldi/Turmeric!",
      image:
        "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/5/3/turmeric.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nulla eaque vitae cum placeat. Ea numquam fugiat et! Labore, sint.",
      nutrients: [
        { title: "Protein (g)", value: "0.17" },
        { title: "Phosphorus, P (mg)", value: "5.9" },
        { title: "Potassium, K (mg)", value: "55.55" },
      ],
      price: 500,
    },
    {
      title: "Chilli/Mirch!",
      image:
        "https://www.organicgyaan.com/cdn/shop/files/Red-Chilli-Powder.jpg?v=1686380360",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nulla eaque vitae cum placeat. Ea numquam fugiat et! Labore, sint.",
      nutrients: [
        { title: "Protein (g)", value: "0.17" },
        { title: "Phosphorus, P (mg)", value: "5.9" },
        { title: "Potassium, K (mg)", value: "55.55" },
      ],
      price: 1500,
    },
    {
      title: "Cinamon/Dalchini!",
      image:
        "https://cdn.shopaccino.com/refresh/articles/banner-332299_l.jpg?v=329",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nulla eaque vitae cum placeat. Ea numquam fugiat et! Labore, sint.",
      nutrients: [
        { title: "Protein (g)", value: "0.17" },
        { title: "Phosphorus, P (mg)", value: "5.9" },
        { title: "Potassium, K (mg)", value: "55.55" },
      ],
      price: 150000,
    },
  ];

  const jsx = arrMasale.map(function (value, index, array) {
    return (
      <MasalaCard
        key={index}
        title={value.title}
        description={value.description}
        imgURL={value.image}
        nutrients={value.nutrients}
      />
    );
  });

  console.log("jsx", jsx);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "36px",
        gap: "18px",
        overflow: "hidden",
      }}
    >
      {jsx}
    </div>
  );
}

export default Masale;
export { chip, jet };
