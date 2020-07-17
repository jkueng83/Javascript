function signIn() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (user == "Johannes" && password == "1111"){
        alert("Sign in OK");

        document.getElementById("loggedIn").hidden = "false";

    }else{
        alert("Sing in error! Try again!");
    }
  
}