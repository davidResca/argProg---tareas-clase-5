

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const mesesDelAño = 12;
    textoResultado = salarioAnual / mesesDelAño;

    document.querySelector('#resultado').value = `Su salario Mensual es de $ ${textoResultado}.-`;

    return false;
}

