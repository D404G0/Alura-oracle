/*
Desafíos:
1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

//1
/*
let altura = parseFloat(prompt(("Ingrese su altura en: ")));
let peso_kg = parseInt(prompt("Ingrese su peso: "));
*/

function uno(altura, peso_kg){
    let imc = parseInt(peso_kg/(altura * altura));
    console.log(`El inidice de su masa corporal es ${imc}`);
    return;
}

//2
/*
let numero = parseInt(prompt("Ingrese un número: "));
let factorial = 1;
*/
function dos(numero){
    while (numero > 0){
        factorial *= numero;
        numero --
    }
    return console.log(`El factorial de su número es ${factorial}`);
}


//3
/*
let dolar = parseFloat(prompt("Ingrese su cantidad de dinero en dolares: "));
*/
function tres(dolar){
    real_brasileño = 4.80;
    peso_colombiano = 4.222;

    conversion_reales = dolar * real_brasileño;
    conversion_pesos = dolar * peso_colombiano;

    return console.log(`La conversion de sus dolares en reales es ${conversion_reales} y en pesos clombianos es ${conversion_pesos}.`);
}

//4
/*
let altura = parseFloat(prompt("Ingrese la altura de su zona rectangular: "));
let ancho = parseFloat(prompt("Ingrese el ancho de su zona rectangular: "));
*/
function cuatro(altura, ancho){
    perimetro = (altura * 2) + (ancho * 2);
    area = altura * ancho;
    return console.log(`El perimetro de su rectangulo es ${perimetro}cm y el area es ${area}cm2`);
}

//5
/*
let radio = parseFloat(prompt("Ingrese el radio de su circulo: "));
*/
function cinco(radio){
    let pi = 3.14;
    perimetro = pi * (radio * 2);
    area = pi * (radio ** 2);
    return console.log(`El perimetro de su circulo con radio ${radio} es ${perimetro}cm y su area es ${area}cm2`);
}

//6
let numero_multiplicar = parseInt(prompt("Ingrese el número deseado para saber su tabla de multiplicacion: "));
let multiplicacion = 1;
function seis(numero_multiplicar){

    while (multiplicacion <= 10){
        resultado = numero_multiplicar * multiplicacion;
        console.log(`${numero_multiplicar} * ${multiplicacion} = ${resultado}`);
        multiplicacion ++;
    }
    return;
}