const API_KEY = '4e62f49fccda9aacf74859594991ca7a'

let lat = 0
let lng = 0

function showWeather(){
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

  if(lat===0 || lng===0){
    return
  } else {
    fetch(url)
    .then(res => res.json())
    .then(data=>{
      const weatherMain = document.querySelector('#weather-main')
      const weather = document.querySelector('#weather-main__weather')
      const temp = document.querySelector('#weather-main__temp')
      const city = document.querySelector('#weather-main__city')
      temp.innerText= data.main.temp + '℃'
      weather.innerText = data.weather[0].main
      city.innerText = data.name

      weatherMain.classList.add('fade-in')
    });
  }
}

function onGeoOk(position){
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  console.log(lat,lng)
  showWeather()
}

function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

setInterval(showWeather, 5000);