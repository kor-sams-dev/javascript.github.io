const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  // if(h1.classList.contains(clickClass)){
  //   h1.classList.remove(clickClass);
  // } else {
  //   h1.classList.add(clickClass)
  // };
  h1.classList.toggle('active')
}

h1.addEventListener('click',handleTitleClick)