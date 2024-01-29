let numeroSecreto = 0;
let intentos = 0;
//Se declara la lista de los numeros sorteados
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();




/// DESAFIOS DE ARRAYS


// // Crea una lista vacía llamada "listaGenerica".
//  let listaGenerica = [];
//  console.log(listaGenerica);



// // Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// // console.log(lenguagesDeProgramacion);


// // Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

// lenguagesDeProgramacion.push('Java', 'Ruby','GoLang');
// // console.log(lenguagesDeProgramacion);

// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// lenguagesDeProgramacion.push('Java', 'Ruby','GoLang');

// function mostrarConsola(lista) {
//     console.log(lista);
// }
// mostrarConsola(lenguagesDeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// function mostrarConsolaEnOrdenInverso(lista) {
//     // Utiliza el método reverse() para invertir el orden de los elementos en la lista.
//     const listaInversa = lista.slice().reverse();//slice se usa para evitar modiifcar el orden de la lista
//     console.log(listaInversa);
// }

// // Llama a la función con la lista "lenguagesDeProgramacion".
// mostrarConsolaEnOrdenInverso(lenguagesDeProgramacion);


// Crea una función que calcule el promedio de los elementos en una lista de números.

// let numeros = [10, 5, 6, 8, 7, 9];

// function promedioLista(lista) {
//     // Utiliza reduce() para sumar todos los elementos de la lista.
//     const suma = lista.reduce((acumulador, elemento) => acumulador + elemento, 0);

//     // Calcula el promedio dividiendo la suma por la cantidad de elementos.
//     const promedio = suma / lista.length;

//     return promedio;
// }

// // Llama a la función con la lista "numeros".
// const resultadoPromedio = promedioLista(numeros);
// console.log(`El promedio de la lista es: ${resultadoPromedio}`);


// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// let lista = [10,20,60,311,2,5,9,78,1000];

// function elementoComparador(numeros){
//     let max = Math.max(...numeros);
//     let min = Math.min(...numeros);

//     console.log(`El numero mas grande es : ${max}`);
//     console.log(`El numero mas pequeño es : ${min}`);

// }
// elementoComparador(lista);

// Crea una función que devuelva la suma de todos los elementos en una lista.

// let elementos = [10,20,30,40];
// function sumaLista(numeros){
//     let suma = numeros.reduce((acumulador, elemento)=> acumulador + elemento, 0);
//     console.log(suma);
// }
// sumaLista(elementos);
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// let lista = [10, 20, 60, 311, 2, 5, 9, 78, 1000];

// function encontrarPosicion(elemento, lista) {
//     const posicion = lista.indexOf(elemento);
//     return posicion;
// }

// // Ejemplo de uso: encuentra la posición de 9 en la lista.
// const elementoBuscado = 1;
// const posicionEncontrada = encontrarPosicion(elementoBuscado, lista);

// if (posicionEncontrada !== -1) {
//     console.log(`El elemento ${elementoBuscado} se encuentra en la posición ${posicionEncontrada}.`);
// } else {
//     console.log(`El elemento ${elementoBuscado} no se encuentra en la lista.`);
// }



// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

// let l1 = [1, 2,10];
// let l2 = [4, 5, 6];

// function sumaListas(lista1, lista2) {
//     // Verifica que las listas tengan el mismo tamaño.
//     if (lista1.length !== lista2.length) {
//         console.error("Las listas deben tener el mismo tamaño.");
//         return [];
//     }

//     // Crea una nueva lista con la suma de los elementos uno a uno.
//     const resultado = [];
//     for (let i = 0; i < lista1.length; i++) {
//         resultado.push(lista1[i] + lista2[i]);
//     }

//     return resultado;
// }

// // Llama a la función con las listas "l1" y "l2".
// const resultadoSuma = sumaListas(l1, l2);
// console.log(resultadoSuma);


// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

// let lista = [2,4,6];

// function listaCuadrado(numeros){

//     const resultado = [];
//     for(let i = 0; i < numeros.length; i++){
//         resultado.push(Math.pow(numeros[i],2));
//     }
//     return resultado;
// }
// console.log(listaCuadrado(lista));