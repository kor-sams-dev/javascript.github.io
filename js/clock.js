const clock = document.querySelector('h2#clock')

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  const nowDate = `${hours}:${minutes}:${second}`
  clock.innerText = nowDate
}
getClock()
setInterval(getClock, 1000);