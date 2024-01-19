import React from "react";

function SearchBar(props) {
  function getWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        props.setWeather(data);
      })
      .catch(function (err) {});
  }

  function handleChange(e) {
    props.setCity(e.target.value);
  }

  console.log(props.weather, props.city);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        marginBottom: "16px",
      }}
    >
      <input
        type="text"
        style={{ borderRadius: "32px", padding: "8px", flexGrow: 1 }}
        onChange={handleChange}
      />
      <button style={{ borderRadius: "32px" }} onClick={getWeather}>
        Submit
      </button>
    </div>
  );
}

export default SearchBar;
