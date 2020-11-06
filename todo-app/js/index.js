let todoList = []
const inputElement = document.getElementById('TodoInput')
const listElement = document.getElementById('TodoList')

inputElement.onkeydown = function (event) {
    if (event.key === 'Enter') {
        handleAddTodo()
    }
}

function handleAddTodo () {
    const inputValue = inputElement.value

    if (inputValue === '') return
    
    const newTodoItem = {
        id: Date.now(),
        name: inputValue,
        status: 'pending'
    }

    todoList.push(newTodoItem)
    inputElement.value = ''
    inputElement.focus()
    render()
}

function render () {
    listElement.innerHTML = ''

    todoList.forEach(function (todoItem) {
        const todoItemElement = document.createElement('li')
        todoItemElement.classList = 'todo-list-item'
        todoItemElement.id = todoItem.id

        const todoItemContent = getTodoItemContentByTodo(todoItem)
        todoItemElement.innerHTML = todoItemContent

        listElement.append(todoItemElement)
    })
}

function getTodoItemContentByTodo (todoItem) {
    return `
        <div class="todo-list-item-content">
            <input type="checkbox" class="todo-item-check" />
            <span class="todo-item-text">${todoItem.name}</span>
        </div>
        <div class="todo-list-item-actions">
            <button class="purple-background">
                <img src="assets/checkmark.svg">
            </button>
            <button class="orange-background">
                <img src="assets/trash.svg">
            </button>
        </div>
    `
}