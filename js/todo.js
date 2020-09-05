const tasks = [];
let task = {
  description: "Hier ist ein Beispiel für eine Aufgabe",
  isDone: true,
};

tasks.push(task);

printTaskList();

function addTask() {
  const task1 = {
    description: "lalelu",
    isDone: false,
  };
  const task2 = {
    description: "wandern",
    isDone: false,
  };

  console.log("added Task");

  tasks.push(task1);
  tasks.push(task2);

  console.log("number of tasks: " + tasks.length);

  alert("Klick Task");
}

function addToListTest() {
  var obj = document.getElementById("list");
  obj.onclick = function (e) {
    if (!e) e = window.event;
    var el = e.target || e.srcElement;
    var neu = document.createElement("li");
    neu.innerHTML = "dein Text";
    el.parentNode.insertBefore(neu, el);
  };
}

function addTask() {
  let newTaskString = document.getElementById("newTask").value;

  let task = {
    description: newTaskString,
    isDone: false,
  };

  tasks.push(task);

  // das war zum Testn:  alert(task.description + "+" + task.isDone);

  deleteValueNewTask(); //document.getElementById("newTask").value = ""; // Eingabefeld wieder leeren

  printTaskList();
}

function printTaskList() {
  document.getElementById("toDoList").innerHTML = getTaskList();
}

function getTaskList() {
  let html = "";
  let index = 0;
  tasks.forEach((element) => {
    //  html += element.description + "  johi  ";

    let checked = "";

    if (element.isDone) {
      checked = "checked";
    }

    html +=
      "<li class='row alert alert-secondary'>" +
      "<span class='col-10'> " +
      element.description +
      "</span> " +
      " <div class='col-2'> " +
      " <input type='checkbox' aria-label='Checkbox'" +
      checked +
      " data-index='" +
      index +
      "' " +
      " onclick='markTask(this)'" +
      " /> Done " +
      " </div> " +
      " </li> ";

    index++;
  });

  // zum testen: console.log(html);

  return html;
}

function deleteValueNewTask() {
  document.getElementById("newTask").value = ""; // Eingabefeld wieder leeren
}

function markTask(element) {
  let index = element.attributes["data-index"].value;
  let checked = element.checked;

  if (checked) {
    tasks[index].isDone = true;
  } else {
    tasks[index].isDone = false;
  }
}

function deleteDoneTasks() {
  let updatedTasks = [];

  tasks.forEach((element) => {
    if (!element.isDone) {
      updatedTasks.push(element);
    }
  });

  while (tasks.length > 0) {
    tasks.pop();
  }

  for (let index = 0; index < updatedTasks.length; index++) {
    tasks.push(updatedTasks[index]);
  }

  printTaskList();
}
