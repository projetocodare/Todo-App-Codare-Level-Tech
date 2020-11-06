function getTodoItemContentByTodo (todoItem) {
    return `
        <div class="todo-list-item-content">
            <input 
                type="checkbox"
                class="todo-item-check" 
                ${todoItem.status === 'done' ? 'checked' : ''} 
                id="check_${todoItem.id}"
            />
            <span class="todo-item-text">${todoItem.name}</span>
        </div>
        <div class="todo-list-item-actions">
            <button class="purple-background" id="toggle_${todoItem.id}">
                <img src="assets/checkmark.svg">
            </button>
            <button class="orange-background" id="delete_${todoItem.id}">
                <img src="assets/trash.svg">
            </button>
        </div>
    `
}