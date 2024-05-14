document.getElementById("form-register-user").addEventListener("submit", function(event){
    //var nombre = document.getElementById("nombre-reg").value;
    //var apellido = document.getElementById("apellido-reg").value; 
    var numero = document.getElementById("numero-reg").value.toString();
    //var fech = document.getElementById("fech-reg").value;
    //var direccion = document.getElementById("direccion-reg").value;
    //var email = document.getElementById("email-reg").value;
    var password = document.getElementById("password-reg").value;
    var cpassword = document.getElementById("cpassword-reg").value;
    var error_n = document.getElementById("error-n");
    var error_a = document.getElementById("error-a");
    var error_nu = document.getElementById("error_nu");
    var error_f = document.getElementById("error-f");
    var error_d = document.getElementById("error-d");
    var error_email = document.getElementById("error-email");
    var error_pass = document.getElementById("error-pass");
    var error_cp = document.getElementById("error-cp");
    var emailField = document.getElementById("email-log");
    var passwordField = document.getElementById("password-log");

    //error_n.innerHTML = "";
    //error_a.innerHTML = "";
    error_nu.innerHTML = "";
    //error_f.innerHTML = "";
    //error_d.innerHTML = "";
    error_email.innerHTML = "";
    error_pass.innerHTML = "";
    error_cp.innerHTML = "";

    if(numero.length !== 9){
        error_nu.innerHTML = "El número de teléfono debe tener 9 dígitos";
        numeroField.classList.add("error");
        event.preventDefault();
    } else {
        numeroField.classList.remove("error");
    }

    if(password.length < 5 || password.length > 20){
        error_pass.innerHTML = "Minimo de 5 caracteres y maximo 20";
        passwordField.classList.add("error");
        event.preventDefault();
    } else {
        passwordField.classList.remove("error");
    }

    if(cpassword.length < 5 || cpassword.length > 20){
        error_pass.innerHTML = "Minimo de 5 caracteres y maximo 20";
        passwordField.classList.add("error");
        event.preventDefault();
    } else {
        passwordField.classList.remove("error");
    }
}); 
