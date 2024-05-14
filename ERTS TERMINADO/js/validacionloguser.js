document.getElementById("form_log_u").addEventListener("submit", function(event){
    var logear = document.getElementById("email-log").value;
    var password = document.getElementById("password-log").value; 
    var error_email = document.getElementById("error-email");
    var error_pass = document.getElementById("error-pass");
    var emailField = document.getElementById("email-log");
    var passwordField = document.getElementById("password-log");

    error_email.innerHTML = "";
    error_pass.innerHTML = "";

    if(logear.length < 5 || logear.length > 20){
        error_email.innerHTML = "Minimo de 5 caracteres y maximo 20";
        emailField.classList.add("error");
        event.preventDefault();
    } else {
        emailField.classList.remove("error");
    }

    if(password.length < 5 || password.length > 20){
        error_pass.innerHTML = "Minimo de 5 caracteres y maximo 20";
        passwordField.classList.add("error");
        event.preventDefault();
    } else {
        passwordField.classList.remove("error");
    }
});