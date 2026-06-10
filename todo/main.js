'use strict';
let text = document.getElementById('taskInput');
let btn = document.getElementById('addBtn');
let taskCheck = document.getElementById('taskList');

let toDo = [
    { text: 'Купить хлеб ', done: false },
    { text: 'Позвонить Васе ', done: false}
];

btn.onclick = function () {
    if (text.value !== '') {
        toDo.push({ text: text.value, done: false });
        text.value = '';
        render();
    }
};

function render() {
    taskCheck.innerHTML = '';
    for (let i = 0; i < toDo.length; i++) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = toDo[i].text;
        if (toDo[i].done) {
            span.classList.add('done');
            span.style.color = 'red';
        }

        const successBtn = document.createElement('button');
        successBtn.textContent = '✔';
        successBtn.onclick = function () {
            toDo[i].done = !toDo[i].done;
            render();
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.onclick = function () {
            toDo.splice(i, 1);
            render();
        };

        li.appendChild(span);
        li.appendChild(successBtn);
        li.appendChild(deleteBtn);

        taskCheck.append(li);
    }
}

render();

