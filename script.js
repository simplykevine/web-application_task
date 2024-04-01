document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

document.getElementById('task-filter').addEventListener('change', function() {
    var filterValue = this.value;
    filterTasks(filterValue);
});

function addTask(taskText) {
    var taskList = document.getElementById('task-list');
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            span.classList.add('task-completed');
        } else {
            span.classList.remove('task-completed');
        }
    });
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

function filterTasks(filterValue) {
    var taskListItems = document.querySelectorAll('#task-list li');
    taskListItems.forEach(function(task) {
        var completed = task.querySelector('.task-completed') !== null;
        switch (filterValue) {
            case 'completed':
                task.style.display = completed ? 'block' : 'none';
                break;
            case 'incomplete':
                task.style.display = completed ? 'none' : 'block';
                break;
            default:
                task.style.display = 'block';
        }
    });
}
