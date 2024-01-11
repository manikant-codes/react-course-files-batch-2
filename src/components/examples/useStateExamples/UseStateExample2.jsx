import React, { useState } from "react";

function UseStateExample2() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const [formValues, setFormValues] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    setCar({ ...car, ...formValues });
  }

  console.log("car", car);

  return (
    <div className="containerOuter">
      <div className="containerInner">
        <div style={{ marginBottom: "32px" }}>
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            onChange={function (e) {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="Color"
            name="color"
            onChange={function (e) {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="Model"
            name="model"
            onChange={function (e) {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={function (e) {
              handleChange(e);
            }}
          />
          <button onClick={handleSubmit}>Submit!</button>
        </div>
      </div>
    </div>
  );
}

export default UseStateExample2;
