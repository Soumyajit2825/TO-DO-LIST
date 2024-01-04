var taskInput = document.getElementById("new-task");
var addButton = document.querySelector(".btn-add");
var today = new Date();
var deadlineInput = document.getElementById("deadlineInput");
addButton.addEventListener("click", function () {
  addTask();
  ajaxRequest(); // You can include this line if you want to call ajaxRequest after adding a task
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

var createNewTaskElement = function (taskObject, taskIndex) {
  var listItem = document.createElement("li");
  var actionContainer = document.createElement("div");
  var editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = taskObject.value;
  editInput.className = "edit-input"; // Add a class for identification

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "chb";
  checkBox.checked = taskObject.isComplete;
  checkBox.onchange = () => {
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
    render();
  };

  var label = document.createElement("label");
  label.className = "label-container";
  label.htmlFor = "chb";

  // Display the deadline consistently
  label.textContent = taskObject.value + (taskObject.deadline ? ' (Deadline: ' + taskObject.deadline + ')' : '');

  var editButton = document.createElement("button");
  editButton.innerHTML = `<i class="ph-pencil"></i>`;
  editButton.className = "btn-edit bg-button";
  editButton.onclick = function () {
    editTask(taskIndex);
  };

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="ph-trash"></i>`;
  deleteButton.className = "btn-delete bg-button";
  deleteButton.onclick = () => {
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
  var editInput = listItem.querySelector(".edit-input");

  // Toggle the editing mode for the selected task
  tasks[taskIndex].isEditing = !tasks[taskIndex].isEditing;

  if (tasks[taskIndex].isEditing) {
    // If in editing mode, show the editInput and set its value
    editInput.style.display = "block";
    label.style.display = "none";
    editInput.value = tasks[taskIndex].value;
    editInput.focus();
  } else {
    // If not in editing mode, show the label and set its text content
    label.textContent = tasks[taskIndex].value + (tasks[taskIndex].deadline ? ' (Deadline: ' + tasks[taskIndex].deadline + ')' : '');
    label.style.display = "block";
    editInput.style.display = "none";
    tasks[taskIndex].value = editInput.value.trim(); // Update the task value
    render();
  }
};
var addTask = function () {
  const task = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (task === "") {
    alert("Please enter a todo");
    return;
  }

  tasks.push({ value: task, deadline: deadline, isComplete: false, isEditing: false });
  taskInput.value = "";
  deadlineInput.value = ""; // Clear the deadline input after adding a task
  render();
};

var renderIncompleteTasks = function () {
  var incompleteTaskHolder = document.getElementById("incomplete-tasks");
  incompleteTaskHolder.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    if (!tasks[i].isComplete) {
      const listItem = createNewTaskElement(tasks[i], i);
      incompleteTaskHolder.appendChild(listItem);
    }
  }
};

var renderCompletedTasks = function () {
  var completedTasksHolder = document.getElementById("completed-tasks");
  completedTasksHolder.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
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

  // Save data to localStorage on every render
  localStorage.setItem("taskData", JSON.stringify(tasks));
};

// initial render function
render();