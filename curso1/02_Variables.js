/**
 * Variables
 * var, let y const
 */
//Variables con var
var nombre = "Daniel";
var x = 2;
console.log(nombre + ' ' + x);
var edad = 20;
console.log(edad);
var persona = {
    nombre: "Daniel",
    apellido: "Chuc",
    edad: 20,
    direccion: {
        calle: 'Siempre Viva',
        numeroDeCasa: 123,
    },
    ciudades: [
        'Guayaquil',
        'Cuenca',
        'Manta'
    ]
};
// Redefinición de variables
var ciudad;
console.log(ciudad);
ciudad = "Mérida";
console.log(ciudad);
ciudad = "Guayaquil";
console.log(ciudad);

// Variables con let

let nombre = "Daniel";
console.log(nombre);

// Bloques de codigó, solo se puede ejecutar desde el inicio hasta el final del bloque definido
{
    let saludo = "Hola soy Daniel";
    console.log(saludo);
}
console.log(saludo);

{
    var saludo = "Hola soy Daniel";
    console.log(saludo);
}
console.log(saludo);


// Constantes CONST
// Se debe de escribir con mayuscualas
const PI = 3.14;
console.log(PI);

//Template String

var nombre = "Geovanny";
var saludo = `Hola soy ${nombre}`;
console.log(saludo);