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

        const deleteButton = todoItemElement.querySelector(`#delete_${todoItem.id}`)
        deleteButton.onclick = function () {
            handleDeleteTodoItemById(todoItem.id)
        }

        const toggleStatusButton = todoItemElement.querySelector(`#toggle_${todoItem.id}`)
        toggleStatusButton.onclick = () => {
            handleToggleTodoItemStatusById(todoItem.id)
        }

        const todoItemCheckbox = todoItemElement.querySelector(`#check_${todoItem.id}`)
        todoItemCheckbox.onclick = () => handleToggleTodoItemStatusById(todoItem.id)

        listElement.append(todoItemElement)
    })

    saveState()
}

function handleDeleteTodoItemById (todoId) {
    const todoListOnlyId = todoList.map(function (todoItem) {
        return todoItem.id
    })
    const removeTodoIndex = todoListOnlyId.indexOf(todoId)

    todoList.splice(removeTodoIndex, 1)

    render()
}

function handleToggleTodoItemStatusById (todoId) {
    const todoItemToToggle = todoList.find((todoItem) => {
        return todoItem.id === todoId
    })

    const currentStatus = todoItemToToggle.status
    
    if (currentStatus === 'pending') {
        todoItemToToggle.status = 'done'
    } else {
        todoItemToToggle.status = 'pending'
    }

    render()
}

function saveState () {
    localStorage.setItem('state', JSON.stringify(todoList))
}

function getState () {
    const state = localStorage.getItem('state') || '[]'
    return JSON.parse(state)
}

window.onload = function () {
    todoList = getState()
    render()
}