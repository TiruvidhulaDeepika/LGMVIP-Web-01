const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTodo);

function addTodo() {
  const task = todoInput.value;
  
  if (task.trim() !== '') {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const taskElement = document.createElement('span');
    taskElement.className = 'task';
    taskElement.textContent = task;
    
    todoItem.appendChild(checkbox);
    todoItem.appendChild(taskElement);
    
    todoList.appendChild(todoItem);
    
    todoInput.value = '';
  }
}
