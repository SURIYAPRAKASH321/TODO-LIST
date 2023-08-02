let button = document.getElementById('add');
let taskList = document.getElementById('taskList');
let input = document.getElementById('input');

let list = [];

button.addEventListener('click', () => {
    list.push(input.value);
    addfun(input.value);
    input.value = ''; // Clear the input field after adding the task
});

function addfun(x) {
    let p = document.createElement('p');
    p.innerText = x;
    taskList.appendChild(p);

    // Add a click event listener to each task item (paragraph)
    p.addEventListener('click', () => {
        removeTask(p);
    });
}

function removeTask(taskElement) {
    // Find the index of the task in the list
    let index = list.indexOf(taskElement.innerText);

    // Remove the task from the list and the taskList
    if (index !== -1) {
        list.splice(index, 1);
        taskList.removeChild(taskElement);
    }
}
