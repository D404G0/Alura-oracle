let numero_secreto = 0;
let intentos = 0;
let lista_numeros = [];
let rango_numero = 10;


//recibe el elemento y texto para que sea dinamico
function texto_para_elemento(elemento, texto){
    let variableHTML = document.querySelector(elemento);
    variableHTML.innerHTML = texto;
    return;
}

//genera un numero secreto de 1 a 10
function generar_numero_secreto(){
    let numero_generado = Math.floor(Math.random() * rango_numero) + 1;
    console.log(numero_generado);
    console.log(lista_numeros);

    if (lista_numeros.length == rango_numero){
        texto_para_elemento("p", "Ya se usaron todos los números posibles.");
    }else {
        if (lista_numeros.includes(numero_generado)){
            return generar_numero_secreto();
        }else{
            lista_numeros.push(numero_generado);
            return numero_generado;
        }
    }
}

//funcion para limpiar el campo del input
function limpiar_input(){
    document.querySelector('#numero_usuario').value = '';
};



//se inicia la verificacion del numero
function verificar_intento(){


    // se define como int el input del ususario para la salida del dato
    let numero_usuario = parseInt(document.getElementById('numero_usuario').value);

    //se suma +1 en el contador
    intentos ++

    //se inicia la validacion para saber el rango del numero secreto
    if(numero_secreto === numero_usuario){
        texto_para_elemento("p", `Acertaste, el numero secreto es ${numero_usuario} y lo lograste en ${intentos} ${(intentos === 1) ? 'vez.' : 'veces.' }`); 
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(numero_usuario > numero_secreto){
        texto_para_elemento("p", `El numero secreto es menor que ${numero_usuario}.`);
        limpiar_input();

    }else if(numero_usuario < numero_secreto){
        texto_para_elemento("p", `El numero secreto es mayor que ${numero_usuario}. `);
        limpiar_input();
    }
    console.log(intentos);
    return;
}

//condiciones iniciales
function condiciones_iniciales(){
    numero_secreto = generar_numero_secreto();
    console.log(numero_secreto);

    intentos = 0;

    texto_para_elemento("h1", "Adivina el numero secreto:D.");
    texto_para_elemento("p", "Ingresa un numero maximo para generar un numero secreto :D. ");
}

//funcion para reiniciar el juego despues de ganar
function reiniciar_juego(){
    //limpiar el campo del input
    limpiar_input();

    //mensajes iniciales
    condiciones_iniciales();

    //desabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condiciones_iniciales();

