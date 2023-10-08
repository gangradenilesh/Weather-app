const APIKEY = "27633cd7206d13accc81f4be51ecad28";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?q=";

let currCity = "Indore";
let units = "metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather() {
  const res = await fetch(
    APIURL + `${currCity}` + `&appid=${APIKEY}` + `&units=${units}`
  );
  const data = await res.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".feels_like").innerHTML =
    data.main.feels_like.toFixed();
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " mph";
  document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
  document.querySelector(".weather__forecast").innerHTML = data.weather[0].main;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "Wind") {
    weatherIcon.src = "images/wind.png";
  }
}

searchBtn.addEventListener("click", () => {
  currCity = searchBox.value;
  checkWeather();
  searchBox.value = "";
});

document.body.addEventListener("load", checkWeather());
