document.addEventListener("DOMContentLoaded", ()=> {
    loadTasks();
    const taskForm = document.querySelector('#taskForm');
    taskForm.addEventListener('submit', onAddTask);
});

async function getTasks() {
    const url = './data/tasks.json';
    const response = await fetch(url);
    return await response.json();
}

function onCompleteTask(taskId) {
    const taskLi = document.querySelector(`li[data-task-id="${taskId}"]`);
    taskLi.classList.toggle('task-completed');
    //Update task in localstorage
    const tasks = JSON.parse(localStorage.tasks);
    const taskIndex = tasks.findIndex(t => t.id == taskId);
    console.log(`taskId ${taskId} found at ${taskIndex}`)
    tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;
    localStorage.tasks = JSON.stringify(tasks);
}

function onDeleteTask(taskId) {
    const taskLi = document.querySelector(`li[data-task-id="${taskId}"]`);
    taskLi.remove();

    //Delete from Local Storage
    let tasks = JSON.parse(localStorage.tasks);
    tasks = tasks.filter(t => t.id != taskId);
    localStorage.tasks = JSON.stringify(tasks);
}

function onAddTask(event) {
    //event.preventDefault();
    const tasks = JSON.parse(localStorage.tasks);
    const nextId = Math.max( ...tasks.map(t => t.id)) + 1;
    console.log(`nextId: ${nextId}`);
    const taskForm = document.querySelector('#taskForm');
    const task = {
        id : nextId,
        task: taskForm.elements['task'].value.trim(),
        deadline: taskForm.elements['deadline'].value,
        priority: taskForm.elements['priority'].value,
        isCompleted: false
    };
    console.log(task)
    // Add to UI
    const tasksUL = document.querySelector('#tasksList');
    tasksUL.insertAdjacentHTML( 'beforeend', task2Html(task))

    //Add to localstorage
    tasks.push(task)
    localStorage.tasks = JSON.stringify(tasks);
}

async function loadTasks() {
    let tasks;
    if (localStorage.tasks) {
        tasks = JSON.parse(localStorage.tasks);
    } else {
        const tasks = await getTasks();
        localStorage.tasks = JSON.stringify(tasks)
    }
    console.log(tasks);

    const tasksUL = document.querySelector('#tasksList');

    tasksUL.innerHTML = ""
    tasks.forEach(t => {
        tasksUL.insertAdjacentHTML( 'beforeend', task2Html(t))
    })
}

function task2Html(task) {
    return `<li data-task-id="${task.id}" class="${task.isCompleted ? 'task-completed' : ''}">
                   <i class="material-icons-outlined delete-icon" onclick="onDeleteTask(${task.id})">
                    delete
                   </i>
                   <label>
                       <input type="checkbox"
                           ${task.isCompleted ? 'checked' : ''} 
                           onchange="onCompleteTask(${task.id})">
                       ${task.task} (${task.priority} priority. Due on ${task.deadline})
                   </label>
            </li>`
}