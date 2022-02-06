const clock = document.querySelector('h2#clock__time')

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  let nowTime = ''
  if(seconds % 2 === 0){
    nowTime = `${hours}:${minutes}`
  } else {
    nowTime = `${hours} ${minutes}`
  }

  
  clock.innerText = nowTime
}
getClock()
setInterval(getClock, 1000);