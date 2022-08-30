

const mostrarHora = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());


    document.getElementById('hora').innerHTML = ` ${hr}:${min}:${sec}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                     'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    let diaSemena = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemena}, ${dia} ${mes}`;

    document.getElementById('fecha').innerHTML = fechaTexto;

}


setInterval(mostrarHora, 1000);


const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }

    return hora;
}