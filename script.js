const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  function newTodo() {
    const todoItem = document.createElement('li')
    todoItem.classList.add(classNames.TODO_ITEM)
  
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add(classNames.TODO_CHECKBOX)
  
    const todoText = document.createElement('span')
    todoText.classList.add(classNames.TODO_TEXT)
    todoText.textContent = 'New task'
  
    const deleteButton = document.createElement('button')
    deleteButton.classList.add(classNames.TODO_DELETE)
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', () => {
      list.removeChild(todoItem)
      updateItemCount(todoItem);
    })
  
    checkbox.addEventListener('change', () => {
      updateItemCount()
    })
  
    todoItem.appendChild(checkbox)
    todoItem.appendChild(todoText)
    todoItem.appendChild(deleteButton)
  
    list.appendChild(todoItem)
  
    updateItemCount(todoItem)
  }
  
  function updateItemCount(removedTodoItem) {
    itemCountSpan.textContent = list.children.length;
  
    const uncheckedTodos = Array.from(list.getElementsByClassName(classNames.TODO_CHECKBOX)).filter(checkbox => !checkbox.checked);
    uncheckedCountSpan.textContent = uncheckedTodos.length;
  
    if (removedTodoItem) {
      const removedCheckbox = removedTodoItem.querySelector(`.${classNames.TODO_CHECKBOX}`);
      if (!removedCheckbox.checked) {
        uncheckedCountSpan.textContent = Math.max(0, uncheckedTodos.length - 1);
      }
    }
  }