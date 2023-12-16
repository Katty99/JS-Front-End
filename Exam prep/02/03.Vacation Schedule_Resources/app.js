const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

const endpoints = {
    update: (id) => `${BASE_URL}/${id}`,
    delete: (id) => `${BASE_URL}/${id}`,
};

const nameElement = document.getElementById("name");
const daysElement = document.getElementById("num-days");
const fromDateElement = document.getElementById("from-date");

const confirmedVacations = document.getElementById("confirmed-vacantions");
const list = document.getElementById('list');

const addBtn = document.getElementById("add-vacation");
const editBtn = document.getElementById("edit-vacation");
const loadBtn = document.getElementById("load-vacations");
const clearBtn = document.querySelector(".clear-btn");

let selectedTaskId = null;

function attachEvents() {
    loadBtn.addEventListener('click', loadBoardEventHandler);
    addBtn.addEventListener('click', createTaskEventHandler);
    editBtn.addEventListener('click', editTaskEventHandler);
}

function getIdByName(task) {
    return fetch(BASE_URL)
        .then(res => res.json())
        .then(res => Object.entries(res).find(e => e[1].name == task)[1]._id);
}

async function loadBoardEventHandler() {
    clearAllSections();
    try {
        const res = await fetch(BASE_URL);
        const allTasks = await res.json();
        Object.values(allTasks).forEach((task) => {
            const container = document.createElement('div');
            container.className = 'container';

            const nameElement = document.createElement('h2');
            nameElement.textContent = task.name;

            const dateElement = document.createElement('h3');
            dateElement.textContent = task.date;

            const numberOfDaysElement = document.createElement('h3');
            numberOfDaysElement.textContent = task.days;

            const changeBtn = document.createElement('button');
            changeBtn.className = 'change-btn';
            changeBtn.textContent = 'Change';

            const doneBtn = document.createElement('button');
            doneBtn.className = 'done-btn';
            doneBtn.textContent = 'Done';

            container.appendChild(nameElement);
            container.appendChild(dateElement);
            container.appendChild(numberOfDaysElement);
            container.appendChild(changeBtn);
            container.appendChild(doneBtn);

            list.appendChild(container);
        });
        attachEventListeners();
    } catch (err) {
        console.error(err);
    }
}

function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const doneButtons = document.querySelectorAll('.done-btn');

    changeButtons.forEach((changeButton) => {
        changeButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.container');
            const name = taskElement.querySelector('h2').textContent;
            const date = taskElement.querySelector('h3:nth-child(2)').textContent;
            const numberOfDays = taskElement.querySelector('h3:nth-child(3)').textContent;
            editTask(name, date, numberOfDays);
            enableEditBtn();
        });
    });
    

    doneButtons.forEach((doneButton) => {
        doneButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.container');
            const name = taskElement.querySelector('h2').textContent;
            deleteTask(name);
        });
    });
    
}

function enableEditBtn() {
    addBtn.disabled = true;
    editBtn.disabled = false;
}

function enableAddBtn() {
    addBtn.disabled = false;
    editBtn.disabled = true;
}

function createTaskEventHandler(ev) {
    ev.preventDefault();
    if (nameElement.value !== '' && fromDateElement.value !== '' && daysElement.value !== '') {
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                name: nameElement.value,
                fromDate: fromDateElement.value,
                days: daysElement.value,
            }),
        };

        fetch(BASE_URL, headers)
            .then(loadBoardEventHandler)
            .catch(console.error);

        clearAllInputs();
    }
}

async function editTask(taskName, taskFromDate, taskDays) {
    selectedTaskId = await getIdByName(taskName);
    nameElement.value = taskName;
    daysElement.value = taskDays;
    fromDateElement.value = taskFromDate;
}

function editTaskEventHandler(ev) {
    ev.preventDefault();
    const taskLocation = nameElement.value;
    const data = {
        name: nameElement.value,
        fromDate: fromDateElement.value,
        days: daysElement.value,
        _id: selectedTaskId,
    };

    fetch(endpoints.update(data._id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            clearAllInputs();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function deleteTask(taskName) {
    getIdByName(taskName)
        .then((id) =>
            fetch(endpoints.delete(id), {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
        )
        .then(() => {
            clearAllSections();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function clearAllSections() {
    list.innerHTML = '';
}

function clearAllInputs() {
    nameElement.value = '';
    fromDateElement.value = '';
    daysElement.value = '';
}

attachEvents();
