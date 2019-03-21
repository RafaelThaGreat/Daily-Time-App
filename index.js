let currentdate = new Date();
let tod = currentdate.getHours();
let dateTime =
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "       " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes();

//fetch JSON weather data
fetch(
  "http://api.openweathermap.org/data/2.5/weather?zip=33801,us&appid=0f73c206bdbc02d70acdeea658a97346&units=imperial"
)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let temp = data.main.temp;
    if (temp < 70) {
      weatherMessage = "Wear a Jacket" + " today for the temp of " + temp + ".";
    } else if (temp > 78) {
      weatherMessage =
        "Wear Sunscreen" + " today for the temp of " + temp + ".";
    } else {
      weatherMessage = "Enjoy the weather" + " of " + temp + ".";
    }
  })
  .catch(err => {
    // Do something for an error here
  });

window.onload = function() {
  document.getElementById("time").innerHTML = dateTime;
  document.getElementById("tod").innerHTML = message;
  document.getElementById("weather").innerHTML = weatherMessage;
};

if (tod < 11) {
  message = "Good Morning.";
} else if (tod < 16) {
  message = "Good Afternoon.";
} else {
  message = "Good Evening.";
}
