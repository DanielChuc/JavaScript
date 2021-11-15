/**
 * Operadores Logicos
 */
// AND
console.log(true && true);
console.log(2 > 3 && 1 <= 2);

//OR 
console.log(true || false);
console.log(false || false);

//NOT
console.log(!true);
console.log(!false);


/**
 * Otros operadores 
 */
//Operador de Cadena o concatenacion (+)
var nombre = "Daniel";
var apellido = "Chuc";
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

//Operador condicional

console.log(2 > 3 ? 'ES mayor ' : 'Es menor');

//Operador de desestructuración
var persona = {
    nombre: "Daniel",
    apellido: "Chuc"
};
var { nombre: xyz, apellido } = persona;
console.log(xyz);
console.log(nombre);
console.log(apellido);
console.log(persona);
//Operador de desestructuración de arreglos
//Recuerda que se maneja por posiciones 0,1,2 etc.
var arreglo = [1, 2, 3, 4, 5];

var [primeraPosicion, segundaPosicion] = arreglo;
console.log(primeraPosicion);
console.log(segundaPosicion);

/**
 * Operador de mienbro o acceso de propiedad
 */
//Notación punto
var persona = {
    nombre: "Daniel",
    apellido: "Chuc"
};
console.log(persona.nombre);
console.log(persona.apellido);

//Notacion por corchetes como php
var persona = {
    nombre: "Daniel",
    apellido: "Chuc"
};
console.log(persona['nombre']);
console.log(persona['apellido']);

//Notación por coechetes en arreglos

var arreglo = [21, 22, 23, 24, 25, 26];
console.log(arreglo[0]);
console.log(arreglo[2]);

//Operador de determinación de tipo

console.log(typeof("fhnjk"));
console.log(typeof(54));
console.log(typeof(true));