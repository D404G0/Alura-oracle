let numero_secreto = 0;
let intentos = 1;
let lista_numeros = [];
rango_numero = 0;
intentos_maximos = 0;

//recibe el elemento y texto para que sea dinamico
function texto_para_elemento(elemento, texto){
    let variableHTML = document.querySelector(elemento);
    variableHTML.innerHTML = texto;
    return;
}


//genera un numero secreto de 1 a 10
function generar_numero_secreto(){
    let numero_generado = Math.floor(Math.random() * rango_numero) + 1;
    console.log(lista_numeros);
    console.log(numero_generado);

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



//generar activo
function generar_activo(){
    document.getElementById('generar').removeAttribute('disabled');
}

//reiniciar activo
function intentar_activo(){
    document.getElementById('intentar').removeAttribute('disabled');
}

//nuevo juego
function nuevo_juego_activo(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}



//generar desactivo
function generar_desactivo(){
    document.getElementById('generar').setAttribute('disabled', 'true');
}

//reiniciar desactivo
function intentar_desactivo(){
    document.getElementById('intentar').setAttribute('disabled', 'true');
}

//nuevo juego desactivo
function nuevo_juego_desactivo(){
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//Rango de intetnos y de numero secreto
function verificar_rango(){

    rango_numero = parseInt(document.getElementById(`numero_usuario`).value);

    if (rango_numero < 10){
        texto_para_elemento("p", `Intentelo nuevamente.`);
        nuevo_juego_activo();
        generar_desactivo();
        limpiar_input();
    
    }else {
        intentos_maximos = parseInt(rango_numero/2);

        texto_para_elemento("p", `Tienes ${intentos_maximos} intentos para adivinar el numero secreto que esta en el rango de 1 a ${rango_numero}.`);

        generar_desactivo();
        intentar_activo();
        limpiar_input();

        numero_secreto = generar_numero_secreto();
        console.log(`NUMERO SECRETO ${numero_secreto}`);
    }
    return;
}

//se inicia la verificacion del numero
function verificar_intento(){
    //se suma +1 en el contador
    intentos += 1


    if (intentos < intentos_maximos){
    
        // se define como int el input del usuario para la salida del dato
        let numero_usuario = parseInt(document.getElementById('numero_usuario').value);

        //se inicia la validacion para saber el rango del numero secreto
        if(numero_secreto == numero_usuario){
            texto_para_elemento("p", `Acertaste, el numero secreto es ${numero_usuario} y lo lograste en ${intentos} ${(intentos === 1) ? 'vez.' : 'veces.' }`); 
            nuevo_juego_activo();
            intentar_desactivo();
            
        }else if(numero_usuario > numero_secreto){
            texto_para_elemento("p", `El numero secreto es menor que ${numero_usuario}.`);
            limpiar_input();

        }else if (numero_usuario < numero_secreto){
            texto_para_elemento("p", `El numero secreto es mayor que ${numero_usuario}. `);
            limpiar_input();
        }

    }else {
        texto_para_elemento(`p`, `No acertaste por maximo de ${intentos_maximos} intentos alcanzados, el numero secreto es:  ${numero_secreto}`)
        nuevo_juego_activo();
        intentar_desactivo();
    }


}




//condiciones iniciales
function condiciones_iniciales(){

    intentos = 0;

    texto_para_elemento("h1", "Adivina el numero secreto:D.");
    texto_para_elemento("p", "Ingresa un numero mayor o igual a 10 para generar un número secreto.");
    generar_activo();
}

//funcion para reiniciar el juego despues de ganar
function reiniciar_juego(){
    //limpiar el campo del input
    limpiar_input();

    //mensajes iniciales
    condiciones_iniciales();

    //desabilitar boton
    nuevo_juego_desactivo()

}

condiciones_iniciales();

