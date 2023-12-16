function solve() {

    const createElement = (tag, content = "", klasses = [], id = "", listener = "") => {
        const element = document.createElement(tag);

        if (content) {
            element.textContent = content;
        }

        if (klasses.length) {
            element.classList.add(...klasses);
        }

        if (id) {
            element.id = id;
        }

        if (listener) {
            element.addEventListener("click", listener);
        }

        return element;
    }

    const btnHandler = (e) => {
        const operations = {
            "Load Vacations": loadVacations,
            "Change": changeVacation,
            "Delete": deleteVacation,
            "Add Vacation": addVacation,
            "Edit Vacation": editVacation,
        }

        operations[e.target.textContent](e)
    }

    const changeVacation = (e) => {
        const mainDiv = e.target.parentElement.parentElement;
        editId = mainDiv.id;

        const name = mainDiv.querySelector("h2").textContent;
        const [date, days] = mainDiv.querySelectorAll("h3");

        fields.name.value = name;
        fields.date.value = date.textContent;
        fields.days.value = days.textContent;

        editVacationBtn.disabled = false;
        addVacationBtn.disabled = true;

        mainDiv.remove();
    }

    const deleteVacation = (e) => {
        editId = e.target.parentElement.parentElement.id;
        console.log(editId);

        fetch(`${baseUrl}${editId}`, {
            method: "DELETE",
        })
            .then(() => loadVacations())
            .catch()
    }

    const addVacation = (e) => {
        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(createNewVacation()),
        })
            .then(() => {
                loadVacations();
                resetInputFields();
            })
            .catch()
    }

    const editVacation = (e) => {
        fetch(`${baseUrl}${editId}`, {
            method: "PUT",
            body: JSON.stringify(createNewVacation())
        })
            .then(() => {
                loadVacations();
                editVacationBtn.disabled = true;
                addVacationBtn.disabled = false;
            })
            .catch()
    }

    const loadVacations = (e) => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                listContainer.innerHTML = "";

                Object.values(data).forEach(item => {
                    const containerDiv = createElement("div", "", ["container"], id = item._id);
                    containerDiv.appendChild(createElement("h2", item.name));
                    containerDiv.appendChild(createElement("h3", item.date));
                    containerDiv.appendChild(createElement("h3", item.days, [], ));

                    containerDiv.appendChild(createElement("button", "Change", ["change-btn"], "", btnHandler));
                    containerDiv.appendChild(createElement("button", "Done", ["done-btn"], "", btnHandler));

                    listContainer.appendChild(containerDiv);
                })
            })
    }

    const resetInputFields = () => {
        Object.values(fields).forEach(field => field.value = "");
    }

    const createNewVacation = () => {
        const newVacation = {};
        for (const [key, value] of Object.entries(fields)) {
            newVacation[key] = value.value;
        }

        return newVacation;

    }

    const baseUrl = "http://localhost:3030/jsonstore/tasks/";

    let editId = "";

    const fields = {
        name: document.querySelector("#name"),
        days: document.querySelector("#num-days"),
        date: document.querySelector("#from-date"),
    }

    const loadBtn = document.querySelector("#load-vacations");
    loadBtn.addEventListener("click", btnHandler);

    const addVacationBtn = document.querySelector("#add-vacation");
    addVacationBtn.addEventListener("click", btnHandler);

    const editVacationBtn = document.querySelector("#edit-vacation");
    editVacationBtn.addEventListener("click", btnHandler);

    const listContainer = document.querySelector("#list");
}

solve()