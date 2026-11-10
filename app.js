const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const taskListContainer = document.getElementById("task-list");
const errorDisplay = document.getElementById("error-message");

function createTaskElement(taskName, priority) {
    const listItem = document.createElement("li");

    listItem.classList.add("task-item", "priority-" + priority);

    const nameSpan = document.createElement("span");
    nameSpan.textContent = taskName;

    const badgeSpan = document.createElement("span");
    badgeSpan.classList.add("badge");
    badgeSpan.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

    listItem.appendChild(nameSpan);
    listItem.appendChild(badgeSpan);

    return listItem;
}

function handleFormSubmit(event) {

    event.preventDefault();

    const taskName = taskNameInput.value.trim();
    const priority = taskPrioritySelect.value;

    errorDisplay.textContent = "";

    if (taskName === "") {
        errorDisplay.textContent = "Please enter a task name.";
        return;
    }

    const newTask = createTaskElement(taskName, priority);

    taskListContainer.appendChild(newTask);

    taskForm.reset();
}

taskForm.addEventListener("submit", handleFormSubmit);

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});
