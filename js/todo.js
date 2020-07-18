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