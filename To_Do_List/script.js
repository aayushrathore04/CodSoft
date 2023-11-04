// Get references to HTML elements
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');

// Retrieve tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to display tasks
function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${task}
            <button class="edit-button" onclick="editTask(${index})">Edit</button>
            <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Add a new task
function addTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
        tasks.push(newTask);
        taskInput.value = '';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

// Edit a task
function editTask(index) {
    const editedTask = prompt('Edit the task:', tasks[index]);
    if (editedTask !== null) {
        tasks[index] = editedTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Event listeners
addButton.addEventListener('click', addTask);

// Initial display of tasks
displayTasks();
