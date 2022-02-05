const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function paintGreetings(username){
  loginForm.classList.add(HIDDEN_CLASSNAME)
  greeting.innerText = `hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

function onLoginSubmit(event){
  event.preventDefault();
  const userName = loginInput.value
  localStorage.setItem(USERNAME_KEY, userName)

  handleShowGreeting()

}

loginForm.addEventListener('submit', onLoginSubmit)

const saveUsername = localStorage.getItem(USERNAME_KEY)

if(saveUsername===null){
  // show the form
} else {
  // show the greetings=
  paintGreetings(saveUsername)
}