//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


//Event handling, under interaction is what starts the code execution.

var taskInput = document.getElementById("new-task");//Add a new task.
var addButton = document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement = function (taskString) {

	var listItem = document.createElement("li");

	//input (checkbox)
	var checkBox = document.createElement("input");//checkbx
	//label
	var label = document.createElement("label");//label
	//input (text)
	var editInput = document.createElement("input");//text
	//button.edit
	var editButton = document.createElement("button");//edit button

	//button.delete
	var deleteButton = document.createElement("button");//delete button

	label.innerText = taskString;
	listItem.className = "incomplete-task"
	label.className = "label-container"
	//Each elements, needs appending
	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerHTML = `<img src="https://img.icons8.com/material/24/547340/edit--v1.png"/>`;//innerText encodes special characters, HTML does not.
	editButton.className = "btn-edit";
	deleteButton.innerHTML = `<img src="https://img.icons8.com/external-inkubators-glyph-inkubators/24/cb4154/external-delete-ecommerce-user-interface-inkubators-glyph-inkubators-2.png"/>`;
	deleteButton.className = "btn-delete";



	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask = function () {
	console.log("Add Task...");
	taskInput.value.trim();

	//Create a new list item with the text from the #new-task:
	if(taskInput.value === ''){
		alert("Please enter a todo")
		return
	}
	var listItem = createNewTaskElement(taskInput.value);


	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";

}

//Edit an existing task.
var editTask = function () {
	console.log("Edit Task...");
	console.log("Change 'edit' to 'save'");



	var listItem = this.parentNode;

	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector("label");
	var containsClass = listItem.classList.contains("editMode");
	const editButtonIcon = listItem.getElementsByClassName("btn-edit");
	//If class of the parent is .editmode
	if (containsClass) {

		//switch to .editmode
		//label becomes the inputs value.
		label.innerText = editInput.value;
		editButtonIcon[0].innerHTML = `<img src="https://img.icons8.com/material/24/547340/edit--v1.png"/>`;
	} else {
		editInput.value = label.innerText;
		editButtonIcon[0].innerHTML = `<img src="https://img.icons8.com/material/24/000000/checkmark--v1.png"/>`;
	}

	//toggle .editmode on the parent.
	listItem.classList.toggle("editMode");
}




//Delete task.
var deleteTask = function () {
	console.log("Delete Task...");

	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted = function () {
	console.log("Complete Task...");

	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;

	completedTasksHolder.appendChild(listItem);
	listItem.className = "completed-task"
	bindTaskEvents(listItem, taskIncomplete);

}

var taskIncomplete = function () {
	console.log("Incomplete Task...");
	//Mark task as incomplete.
	//When the checkbox is unchecked
	//Append the task list item to the #incomplete-tasks.
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	listItem.className = "incomplete-task"
	bindTaskEvents(listItem, taskCompleted);
}



var ajaxRequest = function () {
	console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
	console.log("bind list item events");
	//select ListItems children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector(".btn-edit");
	var deleteButton = taskListItem.querySelector(".btn-delete");


	//Bind editTask to edit button.
	editButton.onclick = editTask;
	//Bind deleteTask to delete button.
	deleteButton.onclick = deleteTask;
	//Bind taskCompleted to checkBoxEventHandler.
	checkBox.onchange = checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {

	//bind events to list items chldren(tasksCompleted)
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
	//bind events to list items chldren(tasksIncompleted)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}




// Issues with usabiliy don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Shange edit to save when you are in edit mode.