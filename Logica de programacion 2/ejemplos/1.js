let frutas = ["Manzana", "Uva", "Naranja"];

console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"

frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]

frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]

// Declaramos un array inicial
let lista = ["uno", "dos", "tres"];

// Mostramos el array original
console.log("Array inicial:", lista); // ["uno", "dos", "tres"]
console.log("Longitud inicial:", lista.length); // 3

// Añadimos un elemento al final del array
lista.push("cuatro"); // Método push()
console.log("Después de push('cuatro'):", lista); // ["uno", "dos", "tres", "cuatro"]
console.log("Longitud después de push:", lista.length); // 4

// Eliminamos el último elemento del array
lista.pop(); // Método pop()
console.log("Después de pop():", lista); // ["uno", "dos", "tres"]
console.log("Longitud después de pop:", lista.length); // 3

// Añadimos un elemento al principio del array
lista.unshift("cero"); // Método unshift()
console.log("Después de unshift('cero'):", lista); // ["cero", "uno", "dos", "tres"]
console.log("Longitud después de unshift:", lista.length); // 4

// Eliminamos un elemento específico del array
lista.splice(2, 1); // Método splice(), elimina 1 elemento en la posición 2
console.log("Después de splice(2, 1):", lista); // ["cero", "uno", "tres"]
console.log("Longitud después de splice:", lista.length); // 3

// Invertimos el orden del array
lista.reverse(); // Método reverse()
console.log("Después de reverse():", lista); // ["tres", "uno", "cero"]
console.log("Longitud final:", lista.length); // 3
