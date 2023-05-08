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
    var email = document.getElementById("email").value;
    var verificationCode = document.getElementById("verificationCode");
    var verificationCodeButton = document.getElementById("verificationCodeButton");
    
    if (!regexExp.test(email)){
        alert("Please enter a valid email.");
    }
    else {
        alert("Your code has been sent please check your email.");
        verificationCode.disabled = false;
        verificationCodeButton.disabled = false;
    }
}

function verify(){
    var verificationCode = document.getElementById("verificationCode").value;
    var password = document.getElementById("newPassword");
    var confirmPassword = document.getElementById("confirmNewPassword");

    if (verificationCode.length == 6){
        password.disabled = false;
        confirmPassword.disabled = false;
    }
}

function checkPassword(){
    event.preventDefault();
    var password = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmNewPassword").value;
    var hasUppercase = /[A-Z]/.test(password);
    var hasNumber = /\d/.test(password);

    if (!hasUppercase || !hasNumber){
        alert("Please ensure your password meets the requirements listed beside the password field.")
    }
    else if (password != confirmPassword){
        alert("The passwords you have entered do not match.");
    }
    else{
        alert("Your password has been successfully changed!")
        var close = document.getElementById("closeForgot");
        close.click();
    }
}

function signUp(){
    
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var hasUppercase = /[A-Z]/.test(password);
    var hasNumber = /\d/.test(password);

    if (name == "" || username == "" || email == "" || password == "" || confirmPassword == ""){
        alert("Please fill in all fields before submitting the form.");
    }
    else if (!hasUppercase || !hasNumber){
        alert("Please ensure your password meets the requirements listed beside the password field.")
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

