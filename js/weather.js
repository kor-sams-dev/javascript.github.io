const API_KEY = '4e62f49fccda9aacf74859594991ca7a'

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

  fetch(url)
    .then(res => res.json())
    .then(data=>{
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
      city.innerText = data.name
    });
}

function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)