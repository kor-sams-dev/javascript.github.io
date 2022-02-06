const toDoForm = document.querySelector('#todo-form')
const toDoInput = document.querySelector('#todo-form input')
const toDoList = document.querySelector('#todo-list')

const TODOS_KEY = 'todos'

let toDos = []

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function handelDeleteTodo(event){
  const li = event.target.parentNode

  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id) )

  saveToDos()

  li.remove()
}

function paintToDo(newTodo){
  const li = document.createElement('li')
  li.id = newTodo.id
  const span = document.createElement('span')
  span.innerText = newTodo.text;
  const button = document.createElement('button')
  button.innerText = '❌'
  button.addEventListener('click', handelDeleteTodo)

  li.appendChild(span)
  li.appendChild(button)
  
  toDoList.appendChild(li)

  
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ''
  const newTodoObj = {
    text:newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  saveToDos()
  paintToDo(newTodoObj)
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo);
}