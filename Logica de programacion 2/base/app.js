let numero_secreto = generar_numero_secreto();

function generar_numero_secreto(){
    return Math.floor(Math.random() * 10) + 1;
}


function texto_para_elemento(elemento, texto){
    let variableHTML = document.querySelector(elemento);
    variableHTML.innerHTML = texto;
    return;
}

texto_para_elemento("h1", "Adivina el numero secreto:D.");
texto_para_elemento("p", "Ingresa un numero maximo para generar un numero secreto :D. ");

function verificar_intento(){
    let numero_usuario = parseInt(document.getElementById('numero_usuario').value);
    if(numero_secreto === numero_usuario){
        texto_para_elemento("p", `Acertaste, el numero secreto es ${numero_usuario}. `); 

    }else if(numero_usuario > numero_secreto){
        texto_para_elemento("p", `El numero secreto es menor que ${numero_usuario}.`);

    }else if(numero_usuario < numero_secreto){
        texto_para_elemento("p", `El numero secreto es mayor que ${numero_usuario}. `);
    }
    return;
}
