/*
Desafíos:
1. Crear una función que muestre "¡Hola, mundo!" en la consola.
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

*/

//1
function saludo(){
    console.log("Hola mundo.");
    return;
}

//2
function nombre(){
    let nombre = prompt("Ingrese su nombre: ");
    console.log(`Hola ${nombre}`);
    return;
}

//3
function numero_1(){
    let numero = parseInt(prompt("Ingrese un numero: "));
    console.log(numero * 2);
    return;
}

//4
function numero_3(){
    let numero_1 = parseInt(prompt("Ingrese su primer numero: "));
    let numero_2 = parseInt(prompt("Ingrese su segundo numero: "));
    let numero_3 = parseInt(prompt("Ingrese su tercer numero: "));
    let promedio = numero_1 + numero_2 + numero_3;
    console.log(`El promedio de numero ${numero_1}, numero ${numero_2} y numero ${numero_3} es ${promedio}.`);
    return;
}

//5
function numero_2(){
    let numero_1 = parseInt(prompt("Ingrese su primer numero: "));
    let numero_2 = parseInt(prompt("Ingrese su segundo numero: "));

    if (numero_1 > numero_2){
        console.log(`${numero_1} > ${numero_2}`);
    }else if(numero_2 > numero_1){
        console.log(`${numero_2} > ${numero_1}`);
    }else{
        console.log(`${numero_1} = ${numero_2}`);
    }
    return;
}

//6
function numero(){
    let numero = parseInt(prompt("Ingrese un numero: "));
    let multiplicacion = numero * numero;
    console.log(`${numero} * ${numero} = ${multiplicacion}`);
    return;
}