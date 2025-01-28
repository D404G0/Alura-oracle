/*
Desafíos

1. Crea una lista vacía llamada "listaGenerica".
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6. Crea una función que calcule el promedio de los elementos en una lista de números.
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8. Crea una función que devuelva la suma de todos los elementos en una lista.
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

//1
let lista_generica = [];
console.log(lista_generica);

//2
let lenguajes_programacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguajes_programacion);

///3
lenguajes_programacion.push("Java", "Ruby", "Golang");
console.log(lenguajes_programacion);

//4
function lista(){
    console.log(lenguajes_programacion);
}

//5
function lista_invertida(){
    console.log(lenguajes_programacion.reverse());
}

//6
function promedio(){
    let lista_numeros = [1, 2, 3, 4, 5];
    let suma = 0;
    
    for (i in lista_numeros){
        suma += lista_numeros[i];
    }
    promedio = suma / lista_numeros.length; 
    console.log(promedio);
    return;
}

//7
function mayor_menor(){
    let lista_mayo_menor = [3, 6, 1, 8, 2, 9];
    let mayor = 0;
    let menor = 10;

    for (i in lista_mayo_menor){
        if (lista_mayo_menor[i] > mayor){
            mayor = lista_mayo_menor[i];

        } else if (lista_mayo_menor[i] < menor){
            menor = lista_mayo_menor[i];

        } 
    }
    return console.log(`El numero mayor de la lista es ${mayor} y el numero menor es ${menor}.`);
}
    
//8
function suma(){
    let lista_numeros = [1, 2, 3, 4, 5];
    let suma = 0;
    
    for (i in lista_numeros){
        suma += lista_numeros[i];
    }
    console.log(suma);
    return;
}

//9
/*
let posicion_usuario = prompt("Tiene una lista de frutas, ingrese el nombre de una de ellas para saber si se encuentra en la lista");
*/
function posicion(posicion_usuario){
    let frutas = ["manzana", "pera", "kiwi", "mora", "mango", "lulo"];

    for (i in frutas ){
        if (posicion_usuario == frutas[i]){
            return console.log(`La fruta ${posicion_usuario} se encuentra en la posicion ${i}.`);
        } else {
            return console.log("-1");
        }
    }
}

//10
function listas(){
    let lista_uno = [9, 15, 11];
    let lista_dos = [10, 12, 9];
    let lista_suma = [];

    for (i in lista_dos){
        suma = lista_uno[i] + lista_dos[i];
        lista_suma.push(suma);
    }
    console.log(lista_uno);
    console.log(lista_dos);
    console.log(lista_suma);
    return;
}

//11
function cuadrado(){
    let lista = [2, 4, 6, 8, 10];
    let lista_vacia = [];
    
    for (i in lista){
        cuadrado = lista[i] * lista[i];
        lista_vacia.push(cuadrado);
    }
    return console.log(`El cuadrado de cada numero de la lista ${lista} es ${lista_vacia}`);
}
