/*
Desafíos finales:

1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
*/

/*

//1
let mensaje = "Hola, bienvenidos y bienvenidas.";
console.log(mensaje);

//2
let nombre = "Diego";
console.log(`¡Hola, ${nombre}!`);

//3
let nombre = "Diego";
alert("¡Hola, " + nombre + "!");

//4
let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(pregunta);

//5
let valor1 = 15;
let valor2 = 9;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

//6
let valor1 = 15;
let valor2 = 9;
let resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);

//7
let edad = parseInt(prompt("Ingrese su edad: "));
if (edad >= 18){
    console.log("Felicidades, ya eres mayor de edad");
} else{
    console.log("Lo siento, aun no eres mayor de edad 😔");
}

//8
let numero = parseInt(prompt("Ingrese cualquier valor numerico: "));
if (numero > 0){
    console.log("Su valor es positivo.");
} else if (numero < 0){
    console.log("Su valor es negativo.");
} else{
    console.log("Su valor es 0.");
}

//9
let numero = 1;
while (numero <= 10){
    console.log(numero++);
}

//10
let nota = Math.floor(Math.random() * 10) + 1;
console.log(nota)
if (nota >= 7){
    console.log("Felicidades, aprobaste.");
} else{
    console.log("Lo sentimos, reprobaste.");
}

//11
let numero_aleatorio = Math.random();
console.log(numero_aleatorio);

//12
let numero_aleatorio = Math.floor(Math.random() * 10) + 1;
console.log(numero_aleatorio);

let numero_aleatorio = Math.floor(Math.random() * 1000) + 1;
console.log(numero_aleatorio);

*/
