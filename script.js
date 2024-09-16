let counter = 0;

document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInputField = document.getElementById('task-input');

    let taskInputValue = taskInputField.value;

    if (taskInputValue != null && taskInputValue !== '') {
        const taskList = document.getElementById('task-list');

        counter++;

        const taskLi = document.createElement('li');
        taskLi.setAttribute('id', `task${counter}`)
        taskLi.innerText = taskInputValue;

        taskList.append(taskLi);

        taskInputField.value = '';
    }

    taskInputField.focus();

    const task = document.getElementById(`task${counter}`);
    task.style.userSelect = 'none';

    task.addEventListener('dblclick', function () {
        this.style.textDecoration = 'line-through'
    });
});