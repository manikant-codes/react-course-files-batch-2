export function getWeather(city, callback) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(callback)
    .catch(function (err) {
      console.log(err);
    });
}
