function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button onclick="deleteTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
}

function toggleComplete(task) {
    task.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}
