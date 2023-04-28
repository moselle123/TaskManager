var attempt = 3;

function validate(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "user" &&  password == "name"){
        alert("Login Successfully");
        window.location = "Index.html";
        //return false;
    } else {
        attempt--;
        alert("Incorrect username or password, please try again.");
    }
}