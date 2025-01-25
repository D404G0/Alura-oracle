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
let altura = parseFloat(prompt(("Ingrese su altura en: ")));
let peso_kg = parseInt(prompt("Ingrese su peso: "));

function uno(altura, peso_kg){
    let imc = parseInt(peso_kg/(altura * altura));
    console.log(`El inidice de su masa corporal es ${imc}`);
    return;
}

//2
let numero = parseInt(prompt("Ingrese Un numero para saber su valor factorial: "));
function dos(numero){
    while (numero > 0){
        numero = numero * (numero-1);
        console.log(`El factorial es ${numero}`);
    }
    return;
}