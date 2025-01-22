    //print
    alert("hola mundo");

    //prompt
    let rango_numero = parseInt(prompt("Ingresa un numero maximo para generar un numero secreto: "))
    console.log(rango_numero);

    //variables
    let numero_secreto = Math.floor(Math.random() * rango_numero) + 1;
    console.log(numero_secreto);

while (true){
    let numero_usuario = 0;
    let intentos = 0;

    let intentos_maximos = parseInt(prompt("Ingrese en cuantos intentos quiere tener, no mas de " + (rango_numero/2)));
    console.log(intentos_maximos);
    if (intentos_maximos <= (rango_numero/2)){
        while(numero_usuario != numero_secreto){
    
            //Aumentos de intentos
            intentos ++;
            // intentos = intentos + 1;
            //intentos += 1;
        
            //input del numero del usuario
            let numero_usuario = parseInt(prompt(`Ingresa un número entre el 1 y el ${rango_numero}: `));
        
            //mostrar en la consola del navegador
            //console.log(typeof(numero_usuario));
        
            //condicion para saber si el numero es igual o diferente al numero secreto
            if (numero_usuario == numero_secreto){
                //concatenacion con +
                alert("Acertaste, el numero secreto es: " + numero_usuario + ". Intentos realizados: " + intentos);
                break;
        
            } else if (intentos >= intentos_maximos){
                //concatenacion con ``
                alert(`No acertaste por maximo de ${intentos_maximos} intentos alcanzados, el numero secreto es:  ${numero_secreto}`);
                break;
                
            } else if (numero_usuario < numero_secreto){
                //concatenacion con ``
                alert(`El numero secreto es mayor que ${numero_usuario}. `);   
        
            } else if (numero_usuario > numero_secreto){
                //concatenacion con +
                alert("El numero secreto es menor que: " + numero_usuario); 
            }
        }
        break
    
    } else {
        alert("Error, intentelo nuevamente")
    }

}

