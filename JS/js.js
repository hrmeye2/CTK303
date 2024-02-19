function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }
  
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerText = taskText;
    
    // Add event listener to mark task as completed on click
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
  
    // Add delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '✔︎';
    deleteButton.style.marginLeft = '5px';
    deleteButton.addEventListener('click', function() {
      li.remove();
    });

    function addTodoItem(todoText) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
        <input type="checkbox">
        <p>${todoText}</p>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(todoItem);
    
    // Add event listener to the delete button
    todoItem.querySelector(".delete-btn").addEventListener("click", function() {
        todoItem.remove();
    });

    // Toggle completed class on checkbox change
    todoItem.querySelector("input[type='checkbox']").addEventListener("change", function() {
        todoItem.classList.toggle("completed");
    });
}
  
    // Add nested to-do list
    const nestedList = document.createElement('ul');
    nestedList.classList.add('nested-list');
    const nestedTaskInput = document.createElement('input');
    nestedTaskInput.type = 'text';
    nestedTaskInput.placeholder = 'Add a new subtask';
    const nestedAddButton = document.createElement('button');
    nestedAddButton.innerText = 'Add Subtask';
    nestedAddButton.addEventListener('click', function() {
      addSubtask(nestedList, nestedTaskInput);
    });
  
    li.appendChild(deleteButton);
    li.appendChild(nestedList);
    li.appendChild(nestedTaskInput);
    li.appendChild(nestedAddButton);
    taskList.appendChild(li);

    
    // Clear input field after adding task
    input.value = '';
  }
  
  function addSubtask(parentList, inputField) {
    const subtaskText = inputField.value.trim();
    if (subtaskText === '') {
      alert('Please enter a subtask!');
      return;
    }
  
    const subtaskItem = document.createElement('li');
    subtaskItem.innerText = subtaskText;
  
    // Add event listener to mark subtask as completed on click
    subtaskItem.addEventListener('click', function() {
      subtaskItem.classList.toggle('completed');
    });
  
    parentList.appendChild(subtaskItem);
    inputField.value = '';
  }