/**
 * Ejemplos de Tipos de Datos en JavaScript
 */
//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//Con typeof consultamos que tipo de dato es una variable
nombre = 10.4;
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);
console.log(typeof numero);

//Tipo de dato object
var objeto = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: "9184224",
};
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato boolean (true, false)

var bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFunction() {}
console.log(miFunction);
console.log(typeof miFunction);

//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una funcion
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(typeof Persona);

//Tipo undrfined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

//array

var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

// Valores Vacios

var z = "";
console.log(z);
console.log(typeof z);

//Concatenación de Cadenas

var nombre2 = "Juan";
var apellido2 = "Perez";

var nombreCompleto = nombre2 + " " + apellido2;

console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + " " + "Lara";
console.log(nombreCompleto2);

// Se toma en cuenta el orden
//Contexto de cadena

var x = nombre2 + 2 + 4;
console.log(x);

x = nombre2 + (2 + 4);
console.log(x);

x = 2 + 4 + nombre2;
console.log(x);
