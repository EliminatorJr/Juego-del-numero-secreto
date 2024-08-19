let numeroSecreto = 0;
let intentos = 0;
let listaNumerosAleatorios = [];
let numeroMaximo = 10;

//Funcion con DOM para interactuar con html
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Cuerpo del codigo del juego
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero champ! Lo hiciste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero es menor homms, intenta de nuevo');
        } else {
            asignarTextoElemento('p','El numero es mayor, intenta de nuevo plisss');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}   


function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log(listaNumerosAleatorios);

    if (listaNumerosAleatorios.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosAleatorios.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosAleatorios.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Escoge un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}    
    

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
