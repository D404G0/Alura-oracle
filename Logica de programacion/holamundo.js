//print
alert("hola mundo");

//variables
let numero_secreto = 5;
let numero_usuario = 0;
let intentos = 0;
let intentos_maximos = 4;

while(numero_usuario != numero_secreto){

    //Aumentos de intentos
    intentos ++;
    // intentos = intentos + 1;
    //intentos += 1;

    let numero_usuario = prompt('Ingresa un número entre el 1 y el 10:');

    //mostrar en la consola del navegador
    console.log(numero_usuario);

    //condicion para saber si el numero es igual o diferente al numero secreto
    if (intentos >= intentos_maximos){
        //concatenacion con ``
        alert(`No acertaste por maximo de ${intentos_maximos} intentos alcanzados, el numero secreto es:  ${numero_secreto}`);
        break;

    } else if (numero_usuario == numero_secreto){
        //concatenacion con +
        alert("Acertaste, el numero secreto es: " + numero_usuario + " Intentos realizados: " + intentos);
        break;
        
    } else if (numero_usuario < numero_secreto){
        //concatenacion con ``
        alert(`El numero secreto es mayor que ${numero_usuario}. `);   

    } else if (numero_usuario > numero_secreto){
        //concatenacion con +
        alert("El numero secreto es menor que: " + numero_usuario);
    }
}