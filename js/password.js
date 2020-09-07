var showImage = false;

function initPage(){

    showImageFunktion();
}



function signIn() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
   
    deleteLogInData()

    if ((user === "Johannes") && (password === "1111")){
       
        show();
        setLogStatus("logged in")
        //console.log("singIn")
        //alert("Sign in OK");

        // showImage = true;


        
    }else{
        //alert("Sing in error! Try again!");

        hide();
        //showImage = false;
        


    }
    
}

function deleteLogInData(){
    document.getElementById("user").value = "";
    password = document.getElementById("password").value = "";

}



function showImageFunktion(){

    if(showImage){
        show();
    } else{
        hide()
    }

}

function signOut(){
    hide();
    setLogStatus("logged out")


}


function hide(){
    document.getElementById("loggedIn").style.visibility = "hidden";
    

}

function show(){
    document.getElementById("loggedIn").style.visibility = "visible";
   
    
}

function setLogStatus( status){

    document.getElementById("logStatus").innerHTML = status;


}