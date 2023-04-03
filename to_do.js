//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.

//Event handling, under interaction is what starts the code execution.

var taskInput = document.getElementById("new-task"); //Add a new task.
var addButton = document.getElementsByTagName("button")[0]; //first button

// initial tasks data
let tasks = [
  { value: "Pay bills", isComplete: false },
  { value: "See the Doctor", isComplete: true },
];
 
var v=3;

// get data from localStorage
if (localStorage.getItem("taskData")) {
  tasks = JSON.parse(localStorage.getItem("taskData"));
}

//New task list item
var createNewTaskElement = function (taskString, isComplete, taskIndex) {
  var listItem = document.createElement("li");
  var actionContainer = document.createElement("div");

  //input (checkbox)
  var checkBox = document.createElement("input"); //checkbx
  checkBox.type = "checkbox";
  checkBox.className = "chb";
  checkBox.onchange = () => {
    //toggle isComplete task data and re-render
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
    render();
  };

  //label
  var label = document.createElement("label"); //label
  label.innerText = taskString;
  label.className = "label-container";
  label.htmlFor = "chb";

  //input (text)
  var editInput = document.createElement("input"); //text
  editInput.type = "text";

  //button.edit
  var editButton = document.createElement("button"); //edit button
  editButton.innerHTML = `<i class="ph-pencil"></i>`; //innerText encodes special characters, HTML does not.
  editButton.className = "btn-edit bg-button";
  editButton.onclick = function () {
    editTask(this, taskIndex);
  };

  //button.delete
  var deleteButton = document.createElement("button"); //delete button
  deleteButton.innerHTML = `<i class="ph-trash"></i>`;
  deleteButton.className = "btn-delete bg-button";
  deleteButton.onclick = () => {
    //delete from tasks and re-render
    tasks.splice(taskIndex, 1);
    render();
  };

  if (isComplete) {
    listItem.className = "completed-task";
    checkBox.checked = true;
  } else {
    listItem.className = "incomplete-task";
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

var addTask = function () {
  console.log("Add Task...");
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a todo");
    return;
  }
  //push the task and re-render
  tasks.push({ value: task, isComplete: false });
  taskInput.value = "";
  render();
};

//Edit an existing task.
var editTask = function (that, taskIndex) {
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");

  const listItem = that.parentNode.parentNode;
  //   console.log('ini itu listItem', listItem);
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  //   console.log('ini itu editInput', editInput);
  //   console.log('ini itu label', label);
  var containsClass = listItem.classList.contains("editMode");
  const editButtonIcon = listItem.getElementsByClassName("btn-edit");
  //If class of the parent is .editmode
  if (containsClass) {
    //save the edited value and re-render
    // Ensure the updated value is not blank
    if (editInput.value !== "") {
      tasks[taskIndex].value = editInput.value;
    } else {
      alert("Todo item new value cannot be blank.");
    }
    render();
  } else {
    //switch to .editmode
    //label becomes the inputs value.
    console.log("ini jalan");
    editInput.value = label.innerText;
    editButtonIcon[0].innerHTML = `<i class="ph-check-bold"></i>`;
  }

  //toggle .editmode on the parent.
  listItem.classList.toggle("editMode");
};

var ajaxRequest = function () {
  console.log("AJAX Request");
};

//The glue to hold it all together.

//Set the click handler to the addTask function.
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//Set the enter keypress handler to the addTask function.
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") addTask();
});

var render = function () {
  let completedCount = 0;
  let pendingCount = 0;
  var headingTags = document.getElementsByTagName("h3");
  var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //ul of #incomplete-tasks
  var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

  // clear task every render
  incompleteTaskHolder.innerHTML = "";
  completedTasksHolder.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const listItem = createNewTaskElement(
      tasks[i].value,
      tasks[i].isComplete,
      i
    );
    if (tasks[i].isComplete) {
      completedCount++;
      completedTasksHolder.appendChild(listItem);
    } else {
      incompleteTaskHolder.appendChild(listItem);
      pendingCount++;
    }
  }

  for (let element = 0; element < headingTags.length; element++) {
    if (headingTags[element].innerText.toLowerCase().includes("todo")) {
      headingTags[element].innerText = `Todo ${pendingCount}`;
    } else {
      headingTags[element].innerText = `Completed ${completedCount}`;
    }
  }

  //save data to localStorage on every render
  //   console.log('ini itu ', tasks);
  localStorage.setItem("taskData", JSON.stringify(tasks));
  //refresh theme
};

// initial render function
render();

// Issues with usabiliy don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Shange edit to save when you are in edit mode.
