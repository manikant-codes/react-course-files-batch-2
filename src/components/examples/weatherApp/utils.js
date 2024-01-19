const images = [
  {
    name: "01d.png",
    img: "http://openweathermap.org/img/wn/01d@2x.png",
  },
  {
    name: "01n.png",
    img: "http://openweathermap.org/img/wn/01n@2x.png",
  },
  {
    name: "02d.png",
    img: "http://openweathermap.org/img/wn/02d@2x.png",
  },
  {
    name: "02n.png",
    img: "http://openweathermap.org/img/wn/02n@2x.png",
  },
  {
    name: "03d.png",
    img: "http://openweathermap.org/img/wn/03d@2x.png",
  },
  {
    name: "03n.png",
    img: "http://openweathermap.org/img/wn/03n@2x.png",
  },
  {
    name: "04d.png",
    img: "http://openweathermap.org/img/wn/04d@2x.png",
  },
  {
    name: "04n.png",
    img: "http://openweathermap.org/img/wn/04n@2x.png",
  },
  {
    name: "09d.png",
    img: "http://openweathermap.org/img/wn/09d@2x.png",
  },
  {
    name: "09n.png",
    img: "http://openweathermap.org/img/wn/09n@2x.png",
  },
  {
    name: "10d.png",
    img: "http://openweathermap.org/img/wn/10d@2x.png",
  },
  {
    name: "10n.png",
    img: "http://openweathermap.org/img/wn/10n@2x.png",
  },
  {
    name: "11d.png",
    img: "http://openweathermap.org/img/wn/11d@2x.png",
  },
  {
    name: "11n.png",
    img: "http://openweathermap.org/img/wn/11n@2x.png",
  },
  {
    name: "13d.png",
    img: "http://openweathermap.org/img/wn/13d@2x.png",
  },
  {
    name: "13n.png",
    img: "http://openweathermap.org/img/wn/13n@2x.png",
  },
  {
    name: "50d.png",
    img: "http://openweathermap.org/img/wn/50d@2x.png",
  },
  {
    name: "50n.png",
    img: "http://openweathermap.org/img/wn/50n@2x.png",
  },
];

export function kelvinToCelcius(temp) {
  return Math.round(temp - 273.15);
}

export function getImage(name) {
  const image = images.find((a) => a.name.includes(name));
  console.log("images", image, name);

  if (image) return image.img;
  return images[0].img;
}
