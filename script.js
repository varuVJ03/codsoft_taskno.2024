let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}" onclick="toggleCompletion(${index})">${task.title}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

function addTask() {
    const taskTitleInput = document.getElementById('taskTitleInput');
    const taskDescriptionInput = document.getElementById('taskDescriptionInput');
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    if (title !== '') {
        tasks.push({ title, description, completed: false });
        taskTitleInput.value = '';
        taskDescriptionInput.value = '';
        renderTasks();
        alert('Task added successfully! 💖😍😊');
    }
}

function editTask(index) {
    const newTitle = prompt('Enter new title:', tasks[index].title);
    if (newTitle !== null) {
        tasks[index].title = newTitle.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Initialize tasks
renderTasks();

// Event Listener for Add Task Button
document.getElementById('addTaskBtn').addEventListener('click', addTask);