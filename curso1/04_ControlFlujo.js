/**
 * Control de flujo
 */
var llueve = true;
if (llueve) {
    console.log("Necesito una sombrilla");
}

var administrador = 'administrador';

if (administrador === "administrado") {
    console.log("Bienvenido al sistema");
} else {
    console.log("jaja");
}


const MAYORIA_DE_EDAD = 18;
var edadPersona = 19;
if (edadPersona >= MAYORIA_DE_EDAD) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

/* -------------------------- */
var semaforo = "purpura";
/* -------------------------- */
if (semaforo === 'verde') {
    console.log('Arranca');
} else if (semaforo === "amarillo") {
    console.log("listo?");
} else if (semaforo === "rojo") {
    console.log("Motores apagados");
} else {
    console.log("Color no identificado");
}


//Estructura Switch
//Es sensible de mayusculas
var producto = "Mango";
switch (producto) {
    case 'papaya':
        console.log("Las papayas cuestan un dolar cada libra");
        break;
    case 'naranjas':
        console.log('Las naranjas cuesta un dolar cada libra');
        break;
    case 'mango':
        console.log('El mango cuesta dos dolares cada libra');
        break
    default:
        console.log("No disponemos de ese producto");
        break;
}