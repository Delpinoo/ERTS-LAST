
// Validaciones recuperar_contraseña.html
document.getElementById("form-rec-c").addEventListener("submit", function (event){ //Aquí le ponemos el nombre del formulario que queremos validar
    var recuperar = document.getElementById("c-new").value; // Se crea una variable para usarla luego en el if, se selecciona con el id dado en el form del html
    var confirmar = document.getElementById("c_con").value;
    var error_c = document.getElementById("error-c"); // Se crea una variable para manejar los errores
    var error_con = document.getElementById("error-con");

    error_c.innerHTML = ""; // Dejamos el texto de error en blanco
    error_con.innerHTML = "";

    if(recuperar.length < 5 || recuperar.length > 20){
        // Si el "recuperar" es menor a 5 o mayor a 20 se accede a la siguiente linea de código
        error_c.innerHTML = "Minimo de 5 caracteres y maximo 20"; // Se aplica el siguiente mensaje al div
        event.preventDefault();
    } 

    if(confirmar.length < 5 || confirmar.length > 20){
        error_con.innerHTML = "Minimo de 5 caracteres y maximo 20";
        event.preventDefault();
    } 
});




