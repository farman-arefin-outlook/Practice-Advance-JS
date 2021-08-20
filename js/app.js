const addButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');


let doneTaskCount = 0;

//function for tracking input value and update

addButton.addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const div = document.createElement('div');
    const para = document.createElement('p');
    const button = document.createElement('button');

    para.innerText = taskInput.value;
    button.innerText = 'Done';


    button.classList.add('btn', 'btn-primary', 'task-button');
    div.classList.add()
});