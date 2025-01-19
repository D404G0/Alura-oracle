//Desafíos

/*
1. Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
2. Declara una variable llamada nombre y asígnale el valor "Lua".
3. Crea una variable llamada edady asígnale el valor 25.
4. Establece una variable numeroDeVentas y asígnale el valor 50.
5. Establece una variable saldoDisponible y asígnale el valor 1000.
6. Muestra una alerta con el texto "¡Error! Completa todos los campos".
7. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
8. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
10. Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección
*/

//1
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

//2
let nombre = "Lua";

//3
let edad = 25;

//4
let numero_de_ventas = 50;

//5
let saldo_disponible = 1000;

//6
alert("¡Error! Completa todos los campos");

//7
let mensaje_de_error = "¡Error! Completa todos los campos";
alert(mensaje_de_error);

//8
let nombre_2 = prompt("Ingresa tu nombre de usuario");

//9
let edad_2 = prompt("Ingrese su edad");

//10
if (edad_2 >= 10){
    alert("¡Puedes obtener tu licencia de conducir!");
}
