
const $calcular = document.querySelector('#calcular');

$calcular.onclick = function(){
    const horas = document.querySelectorAll('#horas');
    const minutos = document.querySelectorAll('#minutos');
    const segundos = document.querySelectorAll('#segundos');
    
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

    // SUMA HORAS.
    for(let i=0; i<horas.length; i++){
        totalHoras += Number(horas[i].value);
    };

    //SUMA MINUTOS y AGREGA EXCEDENTE A HORAS.
    for(let i=0; i<minutos.length; i++){
        totalMinutos += Number(minutos[i].value);
    };
    if(totalMinutos>=60){
        const MINUTOS_EN_UNA_HORA = 60;
        totalHoras += Math.floor(totalMinutos/MINUTOS_EN_UNA_HORA);
        totalMinutos = totalSegundos%MINUTOS_EN_UNA_HORA;
    };

    // SUMA SEGUNDOS y AGREGA EXCEDENTE A MINUTOS.
    for(let i=0; i<segundos.length; i++){
        totalSegundos += Number(segundos[i].value);
    };
    if(totalSegundos>=60){
        const SEGUNDOS_EN_UN_MINUTO = 60;
        totalMinutos += Math.floor(totalSegundos/SEGUNDOS_EN_UN_MINUTO);
        totalSegundos = totalSegundos%SEGUNDOS_EN_UN_MINUTO;
    };

    document.querySelector('#print').innerText = `Tiempo total: ${totalHoras} horas, ${totalMinutos} minutos, ${totalSegundos} segundos`;
    return false;
} 

