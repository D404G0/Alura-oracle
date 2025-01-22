let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafio."

function mensaje_consola(){
    console.log("El boton fue clicado.");
}

function nombre_ciudad(){
    let ciudad = prompt("Ingresa el nombre de una ciudad de Brasil: ");
    alert(`Estuve en ${ciudad} y me acorde de ti.`);
}

function amor_js(){
    alert("Yo amo JS");
}

function suma(){
    let numero1 = parseInt(prompt(("Ingresa un numero: ")));
    let numero2 = parseInt(prompt(("Ingresa otro numero: ")));
    let resultado = numero1 + numero2
    alert(`${numero1} + ${numero2} = ${resultado}`);
}