let button = document.getElementById('add');
let taskList = document.getElementById('taskList');
let input = document.getElementById('input');

let list = [];

button.addEventListener('click', () => {
    list.push(input.value);
    addfun(input.value);
    input.value = ''; 
});

function addfun(x) {
    let p = document.createElement('p');
    p.innerText = x;
    taskList.appendChild(p);
    p.addEventListener('click', () => {
        removeTask(p);
    });
}

function removeTask(taskElement) {
    let index = list.indexOf(taskElement.innerText);
    if (index !== -1) {
        list.splice(index, 1);
        taskList.removeChild(taskElement);
    }
}
