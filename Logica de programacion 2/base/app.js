function texto_para_elemento(elemento, texto){
    let variableHTML = document.querySelector(elemento);
    variableHTML.innerHTML = texto;
}

function intento_de_ususario(){
    alert("Clik desde el boton usando la funcion.");
}

texto_para_elemento("h1", "Adivina el numero secreto:D.");
texto_para_elemento("p", "Ingresa un numero maximo para generar un numero secreto :D : ");