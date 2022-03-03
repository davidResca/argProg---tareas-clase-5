
const numeros = document.querySelectorAll('#numero');

//HALLAR PROMEDIO
function calcularPromedio(){
    sumaTotal = 0;
    for(let i=0; i<numeros.length; i++){
        sumaTotal += Number(numeros[i].textContent);
    }
    return sumaTotal / numeros.length;
}

//HALLAR NUMERO MAXIMO
function hallarNumeroMaximo(){
    let numeroMaximo = Number(numeros[0].textContent);
    for(let i=0; i<numeros.length; i++){
        if(Number(numeros[i].textContent)>numeroMaximo){
            numeroMaximo = Number(numeros[i].textContent);
        }
    }
    return numeroMaximo;
}

// HALLAR NUMERO MINIMO
function hallarNumeroMinimo(){
    let numMin = numeros[0].textContent;
    for(let i=0; i<numeros.length; i++){
        if(Number(numeros[i].textContent) < numMin){
            numMin = Number(numeros[i].textContent);
        };
    }
    return numMin;
}

// HALLAR NUMERO REPETIDO
function hallarNumeroRepetido(){
    let numeroRepetido = false;
    for(let i=0; i<numeros.length; i++){
        for(let j=0; j<numeros.length; j++){
            if(i !== j && (numeros[i].textContent === numeros[j].textContent)){
                numeroRepetido = Number(numeros[j].textContent);
            }
        }
    }
    return numeroRepetido;
};


document.querySelector('#imprimir-promedio').innerText = calcularPromedio();
document.querySelector('#imprimir-mayor-numero').innerText = hallarNumeroMaximo();
document.querySelector('#imprimir-menor-numero').innerText = hallarNumeroMinimo();
document.querySelector('#imprimir-numero-frecuente').innerText = hallarNumeroRepetido();
