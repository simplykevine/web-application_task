document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
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
    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
}
