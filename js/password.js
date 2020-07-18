var showImage = false;

function initPage(){

    showImageFunktion();
}



function signIn() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
   
    

    if ((user === "Johannes") && (password === "1111")){
       
        show();
        //console.log("singIn")
        //alert("Sign in OK");

         showImage = true;


        
    }else{
        //alert("Sing in error! Try again!");

        hide();
        showImage = false;
        


    }
    
}



function showImageFunktion(){

    if(showImage){
        show();
    } else{
        hide()
    }

}



function hide(){
    document.getElementById("loggedIn").style.visibility = "hidden";
}

function show(){
    document.getElementById("loggedIn").style.visibility = "visible";
}