const API = "http://localhost:3000/api/tasks";

const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const filter = document.getElementById("filter");

// Load tasks
async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  taskList.innerHTML = "";

  const selected = filter.value;

  tasks
    .filter(task => selected === "all" || task.priority === selected)
    .forEach(task => {
      const li = document.createElement("li");

      if (task.completed) li.classList.add("completed");

      li.innerHTML = `
        <strong>${task.title}</strong> (${task.priority})<br>
        ${task.description || ""}
        <br>
        Due: ${task.dueDate ? task.dueDate.split("T")[0] : "N/A"}
        <br>
        <button onclick="toggleComplete('${task._id}', ${task.completed})">
          ${task.completed ? "Undo" : "Complete"}
        </button>
        <button onclick="deleteTask('${task._id}')">Delete</button>
      `;

      taskList.appendChild(li);
    });
}

// Add task
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newTask = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    priority: document.getElementById("priority").value,
    dueDate: document.getElementById("dueDate").value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask)
  });

  form.reset();
  loadTasks();
});

// Toggle complete
async function toggleComplete(id, completed) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !completed })
  });

  loadTasks();
}

// Delete task
async function deleteTask(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  loadTasks();
}

// Filter change
filter.addEventListener("change", loadTasks);

// Initial load
loadTasks();