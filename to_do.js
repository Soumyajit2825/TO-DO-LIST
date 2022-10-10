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

// initial tasks data
let tasks = [
	{value: 'Pay bills', isComplete: false},
	{value: 'See the Doctor', isComplete: true},
]

// get data from localStorage
if(localStorage.getItem('taskData')){
	tasks = JSON.parse(localStorage.getItem('taskData'))
}

//New task list item
var createNewTaskElement = function (taskString, isComplete, taskIndex) {

	var listItem = document.createElement("li");

	//input (checkbox)
	var checkBox = document.createElement("input");//checkbx
	checkBox.type = "checkbox";
	checkBox.onchange = () => {
		//toggle isComplete task data and re-render
		tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete
		render();
	}

	//label
	var label = document.createElement("label");//label
	label.className = "label-container"

	//input (text)
	var editInput = document.createElement("input");//text
	editInput.type = "text";
	label.innerText = taskString;

	//button.edit
	var editButton = document.createElement("button");//edit button
	editButton.innerHTML = `<img src="https://img.icons8.com/material/24/547340/edit--v1.png"/>`;//innerText encodes special characters, HTML does not.
	editButton.className = "btn-edit";
	editButton.onclick = (e) => {
		editTask(e, taskIndex)
	};

	//button.delete
	var deleteButton = document.createElement("button");//delete button
	deleteButton.innerHTML = `<img src="https://img.icons8.com/external-inkubators-glyph-inkubators/24/cb4154/external-delete-ecommerce-user-interface-inkubators-glyph-inkubators-2.png"/>`;
	deleteButton.className = "btn-delete";
	deleteButton.onclick = () => {
		//delete from tasks and re-render
		tasks.splice(taskIndex, 1)
		render();
	};

	if(isComplete){
		listItem.className = "completed-task";
		checkBox.checked = true;
	} else {
		listItem.className = "incomplete-task";
	}

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
	const task = taskInput.value.trim();

	if(task === ''){
		alert("Please enter a todo")
		return
	}
	//push the task and re-render
	tasks.push({value: task, isComplete: false})
	taskInput.value = "";
	render()
}

//Edit an existing task.
var editTask = function (e, taskIndex) {
	console.log("Edit Task...");
	console.log("Change 'edit' to 'save'");

	const listItem = e.target.parentNode.parentNode;
	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector("label");
	var containsClass = listItem.classList.contains("editMode");
	const editButtonIcon = listItem.getElementsByClassName("btn-edit");
	//If class of the parent is .editmode
	if (containsClass) {
		//save the edited value and re-render
		tasks[taskIndex].value = editInput.value;
		render();
	} else {
		//switch to .editmode
		//label becomes the inputs value.
		editInput.value = label.innerText;
		editButtonIcon[0].innerHTML = `<img src="https://img.icons8.com/material/24/000000/checkmark--v1.png"/>`;
	}

	//toggle .editmode on the parent.
	listItem.classList.toggle("editMode");
}


var ajaxRequest = function () {
	console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//Set the enter keypress handler to the addTask function.
taskInput.addEventListener("keypress", function (event) {
	if (event.key === 'Enter') addTask();
});


var render = function () {
	var incompleteTaskHolder = document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
	var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

	// clear task every render
	incompleteTaskHolder.innerHTML = '';
	completedTasksHolder.innerHTML = '';

	for (let i = 0; i < tasks.length; i++) {
		const listItem = createNewTaskElement(tasks[i].value, tasks[i].isComplete, i)
		if(tasks[i].isComplete) {
			completedTasksHolder.appendChild(listItem);
		} else {
			incompleteTaskHolder.appendChild(listItem);
		}
	}

	//save data to localStorage on every render
	localStorage.setItem('taskData', JSON.stringify(tasks))
}

// initial render function
render();

// Issues with usabiliy don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Shange edit to save when you are in edit mode.