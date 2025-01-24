let numero_secreto = generar_numero_secreto();


function texto_para_elemento(elemento, texto){
    let variableHTML = document.querySelector(elemento);
    variableHTML.innerHTML = texto;
    return;
}

function verificar_intento(){
    let numero_usuario = parseInt(document.getElementById('numero_usuario').value);
    console.log(typeof(numero_usuario));
    console.log(numero_secreto);
    console.log(numero_usuario);
    console.log(numero_secreto === numero_usuario);
    return;
}

function generar_numero_secreto(){
    return Math.floor(Math.random() * 10) + 1;
}

texto_para_elemento("h1", "Adivina el numero secreto:D.");
texto_para_elemento("p", "Ingresa un numero maximo para generar un numero secreto :D : ");