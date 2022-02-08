const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let container = document.getElementsByClassName("container")[0];
  
let task_num = 0;
let unchecked = 0;

// Function to compute total number of tasks and number of unchecked tasks
function taskCount() {
  let checkBoxes = document.getElementsByClassName("check");
  itemCountSpan.innerHTML = checkBoxes.length;
  let checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
  uncheckedCountSpan.innerHTML = checkBoxes.length - checkedBoxes;
}

// Function to delete a task
function taskRemove(checknum) {
  let taskContainer_ = document.getElementById(`task-container${checknum}`);
  console.log(taskContainer_);
  taskContainer_.remove();
  taskCount();
}

// Function to mark a task completed or unmark as open
function taskStatus(checknum) {
  let task = document.getElementById(`task${checknum}`);
  let checkbox = document.getElementById(`check${checknum}`);
  if (checkbox.checked) {
    task.style.setProperty("text-decoration", "line-through");
  } else {
    task.style.setProperty("text-decoration", "none");
  }
  taskCount();
}

// Function to create a new task, status checkbox and delete button
function newTodo() {
  let task = prompt("Please enter a task:");
  if (task != null && task != "") {
    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task-container");
    taskContainer.setAttribute("id", `task-container${task_num}`);
    container.append(taskContainer);

    let divtask = document.createElement("div");
    divtask.setAttribute("id", `taskdiv${task_num}`);
    divtask.setAttribute("class", "task");
    let h6 = document.createElement("h6");
    h6.setAttribute("id", `task${task_num}`);
    taskContainer.append(divtask);
    divtask.append(h6);
    h6.append(task);
    
    let divcheck = document.createElement("div");
    divcheck.setAttribute("id", `checkdiv${task_num}`);
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", `check${task_num}`);
    input.setAttribute("class", "check");
    input.onclick = function () { taskStatus(this.id.slice(5,)) };
    taskContainer.append(divcheck);
    divcheck.append(input);

    let divdelete = document.createElement("div");
    divdelete.setAttribute("id", `deletediv${task_num}`);
    let button = document.createElement("button");
    button.setAttribute("id", `delete${task_num}`);
    button.setAttribute("class", `delbutton`);
    button.textContent = "Delete";
    button.onclick = function () { taskRemove(this.id.slice(6,)) };
    taskContainer.append(divdelete);
    divdelete.append(button);

    task_num++;

    taskCount();
  }
}

