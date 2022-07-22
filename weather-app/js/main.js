let elForm = document.querySelector(".elForm");
let input = document.querySelector("#cityinput");
let city = document.querySelector("#cityoutput");
let descrip = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

const apik = "5d45260d021ca34429e89588f83d8e74";

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=94a48180f790d79da53acbf6e6129692&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        let nameval = data["name"];
        let descrip = data["weather"]["0"]["description"];
        let tempature = data["main"]["temp"];
        let wndspd = data["wind"]["speed"];

        city.innerHTML = `Weather of <span>${nameval}<span>`;
        temp.innerHTML = `Temperature: <span>${Math.round(tempature)} C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
        input.value.innerHTML = ''
      }
    })
    .catch((err) => alert("You entered Wrong city name"));
});
