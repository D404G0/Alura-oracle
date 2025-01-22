let numero_secreto = generar_numero_secreto();
console.log(numero_secreto)

function texto_para_elemento(elemento, texto){
    let variableHTML = document.querySelector(elemento);
    variableHTML.innerHTML = texto;
    return;
}

function intento_de_ususario(){
    alert("Clik desde el boton usando la funcion.");
    return;
}

function generar_numero_secreto(){
    return Math.floor(Math.random() * 10) + 1;
}

texto_para_elemento("h1", "Adivina el numero secreto:D.");
texto_para_elemento("p", "Ingresa un numero maximo para generar un numero secreto :D : ");