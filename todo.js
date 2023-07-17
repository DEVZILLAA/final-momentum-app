// Get references to HTML elements
const openPopupBtn = document.getElementById('open-popup-btn');
const closePopupBtn = document.getElementById('close-popup-btn');
const popup = document.getElementById('popup');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Get saved tasks from local storage or initialize an empty array
const savedTasks = localStorage.getItem('tasks');
const tasks = savedTasks ? savedTasks.split(',') : [];

// Function to save tasks to local storage
const saveTasks = () => {
    localStorage.setItem('tasks', tasks.join(','));
};

// Function to delete a task from the tasks array
const deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
};

// Function to render the tasks in the task list
const renderTasks = () => {
    taskList.innerHTML = '';

    tasks.forEach((taskText, index) => {
        // Create list item for each task
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        // Create span element for the task text
        const taskTextElement = document.createElement('span');
        taskTextElement.classList.add('task-text');
        taskTextElement.textContent = taskText;

        // Create delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });

        // Append task text and delete button to the task item
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

        // Append task item to the task list
        taskList.appendChild(taskItem);
    });
};

// Event listener for opening the popup
openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Event listener for closing the popup
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Event listener for adding a task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText.trim() === '') {
        return;
    }

    // Add task to the tasks array, save tasks, render task list, and clear input field
    tasks.push(taskText);
    saveTasks();
    renderTasks();
    taskInput.value = '';
});

// Initial rendering of tasks
renderTasks();
