const tasks =[];

function addTask(){

    const task1 = {
        description: "lalelu",
        status : "new"
    }

   console.log("added Task")

    tasks.push(task1);

    console.log("number of tasks: " + tasks.length)

    alert("Klick Task")

}


function addToListTest (){

var obj = document.getElementById('list');
 obj.onclick = function(e) {
	if(!e) e = window.event;
	var el = e.target || e.srcElement; 
	var neu = document.createElement('li');
	neu.innerHTML = 'dein Text';
    el.parentNode.insertBefore(neu, el);
}


}

function addToList(){
    var x = document.createElement("LI");
    var inputText = document.getElementById("newTask").value;
    
    var t = document.createTextNode(inputText);
    
    x.appendChild(t);
    x.classList.add("alert");
    x.classList.add("alert-secondary");
    
    document.getElementById("toDoList").appendChild(x);

    document.getElementById("newTask").value = ""; // Eingabefeld wieder leeren
}
