//print
alert("hola mundo");

//variables
let numero_usuario = prompt('Ingresa un número entre el 1 y el 10:');
let numero_secreto = 5;

//mostrar en la consola del navegador
console.log(numero_usuario);

//condicion para saber si el numero es igual o diferente al numero secreto
if (numero_usuario == numero_secreto){
    //concatenacion con +
    alert("Acertaste, el numero secreto es: " + numero_usuario);
} else {
    //concatenacion con ``
    alert(`No acertaste, el numero secreto es:  ${numero_secreto}`);
}


