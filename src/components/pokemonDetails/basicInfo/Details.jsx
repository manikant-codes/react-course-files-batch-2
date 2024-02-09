import React from "react";
import DetailsTable from "./DetailsTable";

function Details(props) {
  const { description, height, weight, abilities } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum
        dolores incidunt laboriosam nobis aliquam, blanditiis sed at harum
        labore atque fuga magnam ea cupiditate accusantium odit quibusdam,
        quaerat veniam.
      </p>
      <DetailsTable height={height} weight={weight} abilities={abilities} />
    </div>
  );
}

export default Details;
