var dia = "lunes";
switch (dia) {
    case 'lunes':
        console.log('Monday');
        break;
    case 'martes':
        console.log('Tuesday');
        break;
    case 'miercoles':
        console.log('Wednesday');
        break;
    case 'jueves':
        console.log('Thursday');
        break;
    case 'viernes':
        console.log('Friday');
        break;
    case 'sabado':
        console.log('Saturday');
        break;
    case 'domingo':
        console.log('Sunday');
        break;

    default:
        console.log('Día de la semana no valido');
        break;
}

var dia = "miercoles";

if (dia === "lunes") {
    console.log('Monday');

} else if (dia === "martes") {
    console.log('Tuesday');

} else if (dia === "miercoles") {
    console.log('Wednesday');

} else if (dia === "jueves") {
    console.log('Thursday');

} else if (dia === "viernes") {
    console.log('Friday');

} else if (dia === "sabado") {
    console.log('Saturday');

} else if (dia === "domingo") {
    console.log('Sunday');

} else {
    console.log('Día de la semana no valido');

}