var attempt = 3;

function validate(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "user" &&  password == "name"){
        window.location = "Index.html";
        //return false;
    } else {
        attempt--;
        alert("Incorrect username or password, please try again.");
    }
}

function codeSent(){
    alert("Your code has been sent please check your email.")
}

function signUp(){
    window.location = "Login.html"
}