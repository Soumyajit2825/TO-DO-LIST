var taskInput = document.getElementById("new-task");
var addButton = document.querySelector(".btn-add");
var today = new Date();
var deadlineInput = document.getElementById("deadlineInput");
addButton.addEventListener("click", function () {
  addTask();
  ajaxRequest();
});

// Set the enter keypress handler to the addTask function.
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") addTask();
});

// initial tasks data
let tasks = [
  { value: "Pay bills", deadline: "2023-01-01", isComplete: false, isEditing: false },
  { value: "See the Doctor", deadline: "2023-01-02", isComplete: true, isEditing: false },
];

// get data from localStorage
if (localStorage.getItem("taskData")) tasks = JSON.parse(localStorage.getItem("taskData"));

var createNewTaskElement = function (taskString, isComplete, taskIndex) {
  var listItem = document.createElement("li");
  var actionContainer = document.createElement("div");
  var editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = taskObject.value;
  editInput.className = "edit-input"; // Add a class for identification

  // input (checkbox)
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "chb";
  checkBox.checked = isComplete;
  checkBox.onchange = () => {
    // toggle isComplete task data and re-render
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
    render();
  };

  // label
  var label = document.createElement("label");
  label.innerText = taskString;
  label.className = "label-container";
  label.htmlFor = "chb";

  // input (text)
  var editInput = document.createElement("input");
  editInput.type = "text";

  // button.edit
  var editButton = document.createElement("button");
  editButton.innerHTML = `<i class="ph-pencil"></i>`; // innerText encodes special characters, HTML does not.
  editButton.className = "btn-edit bg-button";
  editButton.onclick = function () {
    editTask(taskIndex);
    editTask(taskIndex);
  };

  // button.delete
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="ph-trash"></i>`;
  deleteButton.className = "btn-delete bg-button";
  deleteButton.onclick = () => {
    // delete from tasks and re-render
    tasks.splice(taskIndex, 1);
    render();
  };

  if (taskObject.isComplete) listItem.className = "completed-task";
  else listItem.className = "incomplete-task";

  // If the task is in editing mode, show the editInput; otherwise, show the label
  if (taskObject.isEditing) {
    editInput.style.display = "block";
    label.style.display = "none";
  } else {
    editInput.style.display = "none";
    label.style.display = "block";
  }

  actionContainer.className = "action-container";
  actionContainer.appendChild(editButton);
  actionContainer.appendChild(deleteButton);

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(actionContainer);

  return listItem;
};

var editTask = function (taskIndex) {
  var listItem = document.getElementById("incomplete-tasks").children[taskIndex];
  var label = listItem.querySelector("label");
  var editInput = listItem.querySelector("input[type=text]");

  // toggle .editmode on the parent.
  listItem.classList.toggle("editMode");

  // If in editing mode, show the editInput and set its value
  if (listItem.classList.contains("editMode")) {
    editInput.style.display = "block";
    label.style.display = "none";
    editInput.value = tasks[taskIndex].value;
    editInput.focus();
  } else {
    // If not in editing mode, show the label and set its text content
    label.textContent = tasks[taskIndex].value;
    label.style.display = "block";
    editInput.style.display = "none";
    tasks[taskIndex].value = editInput.value.trim(); // Update the task value
    render();
  }
};

var addTask = function () {
  const task = taskInput.value.trim();
  const deadline = deadlineInput.value;
  const deadline = deadlineInput.value;

  if (task === "") {
    alert("Please enter a todo");
    return;
  }

  tasks.push({ value: task, isComplete: false });
  taskInput.value = "";
  deadlineInput.value = ""; // Clear the deadline input after adding a task
  deadlineInput.value = ""; // Clear the deadline input after adding a task
  render();
};

var render = function () {
  let completedCount = 0;
  let pendingCount = 0;
  var headingTags = document.getElementsByTagName("h3");
  var incompleteTaskHolder = document.getElementById("incomplete-tasks"); // ul of #incomplete-tasks
  var completedTasksHolder = document.getElementById("completed-tasks"); // completed-tasks

  // clear task every render
  incompleteTaskHolder.innerHTML = "";
  completedTasksHolder.innerHTML = "";

  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].isComplete) {
      const listItem = createNewTaskElement(tasks[i], i);
      completedTasksHolder.appendChild(listItem);
    }
  }
};

var render = function () {
  renderIncompleteTasks();
  renderCompletedTasks();

  // Update task counts
  let completedCount = tasks.filter((task) => task.isComplete).length;
  let pendingCount = tasks.filter((task) => !task.isComplete).length;

  var headingTags = document.getElementsByTagName("h3");
  for (let element = 0; element < headingTags.length; element++) {
    if (headingTags[element].innerText.toLowerCase().includes("todo")) {
      headingTags[element].innerText = `Todo ${pendingCount}`;
    } else {
      headingTags[element].innerText = `Completed ${completedCount}`;
    }
  }

  // save data to localStorage on every render
  localStorage.setItem("taskData", JSON.stringify(tasks));
  // refresh theme
};

// initial render function
render();
