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
