var attempt = 3;
const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;


function validate(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "user" &&  password == "name"){
        window.location = "Index.html";
    } else if (username == "" || password == ""){
        alert("Please fill in both the Username and Password fields.");
    } 
    else {
        attempt--;
        alert("Incorrect username or password, please try again.");
    }
}

function codeSent(){
    var verificationCode = document.getElementById("verificationCode").value;
    var verificationCodeButton = document.getElementById("verificationCodeButton").value;
    
    if (!regexExp.test(email)){
        alert("Please enter a valid email.");
    }
    else {
        alert("Your code has been sent please check your email.");
        verificationCode.disabled = false;
        verificationCodeButton.disabled = false;
    }
}

function signUp(){
    
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (name == "" || username == "" || email == "" || password == "" || confirmPassword == ""){
        alert("Please fill in all fields before submitting the form.");
    }
    else if (password != confirmPassword){
        alert("The passwords you have entered do not match.");
    }
    else if (!regexExp.test(email)){
        alert("Please enter a valid email.");
    }
    else{
        window.location = "Login.html"
    }
}

