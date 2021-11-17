/* Funciones */
//dos formas
// primera declarativa
/* function nombreDeLaFuncion(parametros) {
    Cuerpo de nuestra función
}
 */
function saludar() {
    console.log('Hola soy Daniel');
}
//Llamar una función
saludar();
//Pasar un parametro a la función
function saludar(nombre) {
    console.log(`Hola soy ${nombre}`);
}
saludar('Daniel');
//Retornar
function saludar(nombre) {
    return `Hola soy ${nombre}`;
}

var saludo = saludar('Daniel');
console.log(saludo);
console.log(saludar('Daniel Chuc'));


//Segunda forma funciones de expresión las cuales se almacenan en una variable
//Funciones anonimas
var suma = function(a, b) {
    return a + b;
};
console.log(suma(2, 4));

//Función flecha o arrow function

var restar = (a, b) => {
    return a - b;
}
console.log(restar(5, 4));
//Ejemplo 2
//Return implicito
var multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 5));