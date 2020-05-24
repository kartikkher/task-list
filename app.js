// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listners
loadEventListners();

// load all event listners
function loadEventListners() {
  // add task event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear task event
  clearBtn.addEventListener("click", clearTasks);
  // Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
  // Create li element
  const li = document.createElement("li");
  // add class
  li.className = "collection-item";
  // create textnode and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link
  const link = document.createElement("a");
  // add class
  link.className = "delete-item secondary-content";
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);

  // clr input
  taskInput.value = "";

  e.preventDefault();
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear task
function clearTasks() {
  // taskList.innerHTML = "";
  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
