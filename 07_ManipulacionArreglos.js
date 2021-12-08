/**
 * Manipulación arreglos
 */
//Forearch
var letras = ['a', 'b', 'c', 'd', 'e'];
//console.log(letras.length);
for (let i = 0; i < letras.length; i++) {
    console.log(letras[i]);

}
//forEach
var letras = ['a', 'b', 'c', 'd', 'e'];
letras.forEach(letra => console.log(letra));
//Push -- Shift -- Pop
//push -- El método push es muy práctico para añadir valores a un array.
var letras = ['a', 'b', 'c', 'd', 'e'];
letras.push('f');
console.log(letras);
//Shift
//El método shift elimina el elemento en el índice cero y 
//desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado.
//elimina el indice o sea cero del arreglo y devuelve solo el eliminado
letras.shift();
console.log(letras);
var primerElemento = letras.shift();
console.log(primerElemento);
//Pop
//El método pop() elimina el último elemento de un array y lo devuelve.
letras.pop();
console.log(letras);
var ultimaElemento = letras.pop();
console.log(ultimaElemento);