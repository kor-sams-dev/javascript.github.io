const loginForm = document.querySelector("#login__form")
const loginInput = document.querySelector('#login__form input')
const loginButton = document.querySelector('#login__form button')

const greeting = document.querySelector('#greeting')
const greetingText = document.querySelector('#greeting h1')
const logoutButton = document.querySelector('#greeting button')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function triggerHidden(){
  console.log(loginForm)
  loginForm.classList.toggle(HIDDEN_CLASSNAME)
  loginInput.classList.toggle(HIDDEN_CLASSNAME)
  loginButton.classList.toggle(HIDDEN_CLASSNAME)

  greeting.classList.toggle(HIDDEN_CLASSNAME)
  greetingText.classList.toggle(HIDDEN_CLASSNAME)
  logoutButton.classList.toggle(HIDDEN_CLASSNAME)
}

function paintGreetings(){
  greetingText.innerText = `Hello ${localStorage.getItem(USERNAME_KEY)}!`
}

function onLoginSubmit(event){
  event.preventDefault();
  const userName = loginInput.value
  loginInput.value = ''
  localStorage.setItem(USERNAME_KEY, userName)

  paintGreetings()
  triggerHidden()
}

function handleLogout(){
  localStorage.removeItem(USERNAME_KEY)

  triggerHidden()
}

loginForm.addEventListener('submit', onLoginSubmit)

logoutButton.addEventListener('click', handleLogout)

const saveUsername = localStorage.getItem(USERNAME_KEY)

if(saveUsername===null){
  // show the form
} else {
  // show the greetings=
  paintGreetings()
  triggerHidden()
}