let clickCounter = 0;
let mouseoverCounter = 0;


document.getElementById("header").addEventListener("click", function () {
  clickCounter++;

  for (let index = 0; index <= 4; index++) {
    console.log(index);

    if (index == 2) {
      console.log("zwei");
    }
  }

  let string = "Click counter: " + clickCounter

  changeContent(string);
  console.log(string);
});

let changeContentString = "";
function changeContent(text) {
  document.getElementById("content").innerHTML = text;
   changeContentString = changeContentString + text;
    
  console.log( changeContentString) ;
  
}

document.getElementById("header").addEventListener("mouseover", function () {
  mouseoverCounter++;

  let string = "Mouse over counter: " + mouseoverCounter;

  changeContent(string);

  console.log(string);
});

let mousedownConter = 0;
document.getElementById("header").addEventListener("mousedown", function () {
  mousedownConter++;
  changeContent("Mouse down counter: " + mousedownConter);

  console.log("Mouse down counter: " + mousedownConter);
});
